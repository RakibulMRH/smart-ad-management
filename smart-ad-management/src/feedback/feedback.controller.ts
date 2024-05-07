import { Controller, Post, Body, Get, Param, UseGuards } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { CreateFeedbackDto } from './dto/createFeedback.dto';
import { Feedback } from './entities/feedback.entity';
import { JwtAuthGuard } from '../auth/guards/auth.guard';
import { User, UserDecorator } from '../users/entities/user.entity';
import { UserType } from '../users/entities/user.entity'; // Assuming you have a UserType enum
import { Reply } from './entities/reply.entity'; // Import the missing 'Reply' type

@Controller('feedback')
export class FeedbackController {
    constructor(private readonly feedbackService: FeedbackService) {}

    @Post(':adExpertId')
    @UseGuards(JwtAuthGuard)
    async createFeedback(
        @Param('adExpertId') adExpertId: number,
        @Body() createFeedbackDto: CreateFeedbackDto,
        @UserDecorator() user: User,
    ): Promise<Feedback> {
        if (user.type !== UserType.Client) {
            throw new Error('Only clients can create feedback');
        }

        createFeedbackDto.adExpertId = adExpertId;
        createFeedbackDto.clientId = user.id;
        return this.feedbackService.createFeedback(createFeedbackDto);
    }

    @Get(':adExpertId')
    async getFeedbackByAdExpert(@Param('adExpertId') adExpertId: string, @UserDecorator() user: User): Promise<{ feedback: Feedback[]; averageRating: number }> {
        if (user && user.type === UserType.AdExpert && user.id !== parseInt(adExpertId)) {
                throw new Error('Ad experts can only view their own feedback');
        }

        return this.feedbackService.getFeedbackByAdExpert(parseInt(adExpertId));
    }

    @Get()
    @UseGuards(JwtAuthGuard)
    async getAllFeedback(): Promise<Feedback[]> {
        return this.feedbackService.getAllFeedback();
    }

    @Post(':feedbackId/reply')
    @UseGuards(JwtAuthGuard)
    async createReply(
        @Param('feedbackId') feedbackId: number,
        @UserDecorator() user: User,
        @Body('comment') comment: string,
        @Body('parentReplyId') parentReplyId?: number,
    ): Promise<Reply> {
        return this.feedbackService.createReply(feedbackId, user.id, comment, parentReplyId);
    }
}