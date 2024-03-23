import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Feedback } from './entities/feedback.entity';
import { User } from '../users/entities/user.entity';
import { CreateFeedbackDto } from './dto/createFeedback.dto';
import { Reply } from './entities/reply.entity';

@Injectable()
export class FeedbackService {
  constructor(
    @InjectRepository(Feedback)
    private readonly feedbackRepository: Repository<Feedback>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Reply)
    private readonly replyRepository: Repository<Reply>,
  ) {}

  async createFeedback(createFeedbackDto: CreateFeedbackDto): Promise<Feedback> {
    const { rating, comment, adExpertId, clientId } = createFeedbackDto;

    const adExpert = await this.userRepository.findOne({ where: { id: adExpertId } });
    const client = await this.userRepository.findOne({ where: { id: clientId } });

    if (!adExpert || !client) {
        throw new Error('Invalid user');
    }

    const feedback = new Feedback();
    feedback.rating = rating;
    feedback.comment = comment;
    feedback.adExpert = adExpert;
    feedback.client = client;

    return this.feedbackRepository.save(feedback);
  }

  async getFeedbackByAdExpert(adExpertId: number): Promise<{ feedback: Feedback[]; averageRating: number }> {
    const feedback = await this.feedbackRepository.find({
      where: { adExpert: { id: adExpertId } },
      relations: ['replies', 'replies.user', 'client'],
    });

    const totalRatings = feedback.reduce((sum, f) => sum + f.rating, 0);
    const averageRating = feedback.length > 0 ? totalRatings / feedback.length : 0;

    return { feedback, averageRating };
  }

  async getAllFeedback(): Promise<Feedback[]> {
    return this.feedbackRepository.find({ relations: ['replies', 'replies.user', 'client', 'adExpert'] });
  }

  async createReply(feedbackId: number, userId: number, comment: string, parentReplyId?: number): Promise<Reply> {
    const feedback = await this.feedbackRepository.findOne({ where: { id: feedbackId } });
    const user = await this.userRepository.findOne({ where: { id: userId } });

    if (!feedback || !user) {
        throw new Error('Invalid feedback or user');
    }

    const reply = new Reply();
    reply.comment = comment;
    reply.feedback = feedback;
    reply.user = user;

    if (parentReplyId) {
        const parentReply = await this.replyRepository.findOne({ where: { id: parentReplyId } });
        if (!parentReply) {
            throw new Error('Invalid parent reply');
        }
        reply.parentReply = parentReply;
    }

    return this.replyRepository.save(reply);
  }
}