import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { Subscription } from '../subscription/entities/subscription.entity';
import { Feedback } from '../feedback/entities/feedback.entity';
import { Consultation } from '../consultation/entities/consultation.entity';
import { ConsultationSlot } from '../consultation/entities/consultationSlot.entity';

@Injectable()
export class DashboardService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Subscription)
    private subscriptionRepository: Repository<Subscription>,
    @InjectRepository(Feedback)
    private feedbackRepository: Repository<Feedback>,
    @InjectRepository(Consultation)
    private consultationRepository: Repository<Consultation>,
    @InjectRepository(ConsultationSlot)
    private consultationSlotRepository: Repository<ConsultationSlot>,
  ) {}

  async getUserDetails(userId: number): Promise<User> {
    return this.userRepository.findOne({ where: { id: userId } });
  }

  async getSubscriptionDetails(userId: number): Promise<Subscription[]> {
    return this.subscriptionRepository.find({ where: { user: { id: userId } } });
  }

  async getFeedbackForUser(userId: number): Promise<Feedback[]> {
    return this.feedbackRepository.find({ where: { adExpert: { id: userId } } });
  }

  async getConsultationsForUser(userId: number): Promise<Consultation[]> {
    return this.consultationRepository.find({
      where: [{ client: { id: userId } }, { adExpert: { id: userId } }],
      relations: ['slot'],
    });
  }

  async getConsultationSlotsForUser(userId: number): Promise<ConsultationSlot[]> {
    return this.consultationSlotRepository.find({ where: { adExpert: { id: userId } } });
  }
}
