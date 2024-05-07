import { Module } from '@nestjs/common';
import { SubscriptionPlanService } from './subscription-plan.service';
import { SubscriptionPlanController } from './subscription-plan.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubscriptionPlan } from './entities/subscriptionPlan.entity';
import { Subscription } from '../subscription/entities/subscription.entity';
import { Tenant } from '../users/entities/tenant.enitity';
import { UsersModule } from '../users/users.module';  
import { BlacklistedTokenModule } from 'src/blacklisted-token/blacklisted-token.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Subscription, SubscriptionPlan, Tenant]),
    UsersModule, BlacklistedTokenModule],
  providers: [SubscriptionPlanService],
  controllers: [SubscriptionPlanController],
})
export class SubscriptionPlanModule {}