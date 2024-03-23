import { Controller, Post, Body, Put, Param, Delete, Get, UseGuards } from '@nestjs/common';
import { SubscriptionPlanService } from './subscription-plan.service';
import { SubscriptionPlan } from './entities/subscriptionPlan.entity';
import { CreateSubscriptionPlanDto } from './dto/createSubscriptionPlan.dto';
import { UpdateSubscriptionPlanDto } from './dto/updateSubscriptionPlan.dto';
import { SubscriptionPlanGuard } from './guards/subscription-plan.guards';


@Controller('subscriptionPlans')
export class SubscriptionPlanController {
  constructor(private readonly planService: SubscriptionPlanService) {}

 @Get()
  async getAllPlans(): Promise<SubscriptionPlan[]> {
    return this.planService.getAllPlans();
  } 

  @Put(':id')
  @UseGuards(SubscriptionPlanGuard)
  async updatePlan(
    @Param('id') id: number,
    @Body() planData: UpdateSubscriptionPlanDto,
  ): Promise<SubscriptionPlan> {
    return this.planService.updatePlan(id, planData);
  }

  @Delete(':id')
  @UseGuards(SubscriptionPlanGuard)

  async deletePlan(@Param('id') id: number): Promise<void> {
    return this.planService.deletePlan(id);
  }

  @Post()
  @UseGuards(SubscriptionPlanGuard)
  async createPlan(@Body() planData: CreateSubscriptionPlanDto): Promise<SubscriptionPlan> {
    return this.planService.createPlan(planData);
  }
}