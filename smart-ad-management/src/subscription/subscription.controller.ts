import { Controller, Post, Body, Put, Param, Delete, Get, UseGuards } from '@nestjs/common';
import { SubscriptionPlanService } from '../subscription-plan/subscription-plan.service';
import { SubscriptionPlan } from '../subscription-plan/entities/subscriptionPlan.entity';
import { SubscriptionService } from './subscription.service';
import { CreateSubscriptionDto } from './dto/createSubscription.dto';
import { UpdateSubscriptionDto } from './dto/updateSubscription.dto';
import { Subscription } from './entities/subscription.entity';
import { AuthGuard } from '../auth/guards/auth.guard';
import { UsersService } from 'src/users/users.service';

@Controller('subscriptions')
export class SubscriptionController {
  constructor(private readonly subscriptionService: SubscriptionService) {}
//GET /subscriptions/TEANANT_ID/PLAN_ID
  @Post(':userId/:tenantId/:planId')
 @UseGuards(AuthGuard)
  async createSubscription(
    @Param('userId') userId: number,
    @Param('tenantId') tenantId: number,
    @Param('planId') planId: number,
    @Body() createSubscriptionDto: CreateSubscriptionDto,
  ): Promise<Subscription> {
    return this.subscriptionService.createSubscription(tenantId, planId, userId, createSubscriptionDto.paymentMethod );
  }

  @Put(':id')  
  @UseGuards(AuthGuard)

  async updateSubscription(
    @Param('id') id: number,
    @Body() updateSubscriptionDto: UpdateSubscriptionDto,
  ): Promise<Subscription> {
    return this.subscriptionService.updateSubscription(id, updateSubscriptionDto.paymentStatus);
  }

  @Get(':tenantId')
  @UseGuards(AuthGuard)

  async getSubscriptionByTenant(@Param('tenantId') tenantId: number): Promise<Subscription> {
    return this.subscriptionService.getSubscriptionByTenant(tenantId);
  }

  @Get()
  @UseGuards(AuthGuard)
  async getAllSubscriptions(): Promise<Subscription[]> {
    return this.subscriptionService.getAllSubscriptions();
  }
}