import { Module } from '@nestjs/common';
import { SubscriptionService } from './subscription.service';
import { SubscriptionController } from './subscription.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subscription } from './entities/subscription.entity';
import { SubscriptionPlan } from '../subscription-plan/entities/subscriptionPlan.entity';
import { Tenant } from '../users/entities/tenant.enitity';
import { UsersModule } from '../users/users.module'; // import UsersModule
import { BlacklistedTokenModule } from 'src/blacklisted-token/blacklisted-token.module';


@Module({
  imports: [
    TypeOrmModule.forFeature([Subscription, SubscriptionPlan, Tenant]),
    UsersModule,BlacklistedTokenModule],
  providers: [SubscriptionService],
  controllers: [SubscriptionController],
})
export class SubscriptionModule {}