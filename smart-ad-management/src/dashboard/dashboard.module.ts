import { Module } from '@nestjs/common';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { Subscription } from '../subscription/entities/subscription.entity';
import { Feedback } from '../feedback/entities/feedback.entity';
import { Consultation } from '../consultation/entities/consultation.entity';
import { ConsultationSlot } from '../consultation/entities/consultationSlot.entity';
import { AuthModule } from '../auth/auth.module';
import { UsersModule } from '../users/users.module';
import { BlacklistedTokenModule } from 'src/blacklisted-token/blacklisted-token.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Subscription, Feedback, Consultation, ConsultationSlot]),
    AuthModule, UsersModule, BlacklistedTokenModule ],
  controllers: [DashboardController],
  providers: [DashboardService],
})
export class DashboardModule {}
