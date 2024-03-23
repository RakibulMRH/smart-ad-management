import { Controller, Post, Body, Put, Param, Delete, Get, UseGuards } from '@nestjs/common';
import { SubscriptionPlanService } from '../subscription-plan/subscription-plan.service';
import { SubscriptionPlan } from '../subscription-plan/entities/subscriptionPlan.entity';
import { SubscriptionService } from './subscription.service';
import { CreateSubscriptionDto } from './dto/createSubscription.dto';
import { UpdateSubscriptionDto } from './dto/updateSubscription.dto';
import { Subscription } from './entities/subscription.entity';
import { AuthGuard } from '../auth/guards/auth.guard';


@Controller('subscriptions')
export class SubscriptionController {
  constructor(private readonly subscriptionService: SubscriptionService) {}

  @Post()
  @UseGuards(AuthGuard)
  async createSubscription(@Body() createSubscriptionDto: CreateSubscriptionDto): Promise<Subscription> {
    return this.subscriptionService.createSubscription(createSubscriptionDto);
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