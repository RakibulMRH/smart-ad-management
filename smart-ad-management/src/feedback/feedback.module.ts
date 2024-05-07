import { Module } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { FeedbackController } from './feedback.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Feedback } from './entities/feedback.entity';
import { User } from '../users/entities/user.entity';
import { UsersModule } from '../users/users.module'; 
import { Reply } from './entities/reply.entity';
import { BlacklistedTokenModule } from 'src/blacklisted-token/blacklisted-token.module';


@Module({
  imports: [TypeOrmModule.forFeature([Feedback, User,Reply]), UsersModule, BlacklistedTokenModule],
  providers: [FeedbackService],
  controllers: [FeedbackController],
})
export class FeedbackModule {}