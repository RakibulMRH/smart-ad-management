import { Module } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { FeedbackController } from './feedback.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Feedback } from './entities/feedback.entity';
import { User } from '../users/entities/user.entity';
import { UsersModule } from '../users/users.module'; 
import { Reply } from './entities/reply.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Feedback, User,Reply]), UsersModule],
  providers: [FeedbackService],
  controllers: [FeedbackController],
})
export class FeedbackModule {}