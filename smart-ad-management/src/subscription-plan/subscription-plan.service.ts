import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubscriptionPlan } from './entities/subscriptionPlan.entity';
import { CreateSubscriptionPlanDto } from './dto/createSubscriptionPlan.dto';
import { UpdateSubscriptionPlanDto } from './dto/updateSubscriptionPlan.dto';

@Injectable()
export class SubscriptionPlanService {
  constructor(
    @InjectRepository(SubscriptionPlan)
    private planRepository: Repository<SubscriptionPlan>,
  ) {}

  async createPlan(planData: CreateSubscriptionPlanDto): Promise<SubscriptionPlan> {
    const plan = new SubscriptionPlan();
    plan.name = planData.name;
    plan.description = planData.description;
    plan.price = planData.price;  
    plan.features = planData.features;

    return this.planRepository.save(plan);
  }

  async updatePlan(id: number, planData: UpdateSubscriptionPlanDto): Promise<SubscriptionPlan> {
    const plan = await this.planRepository.findOne({ where: { id } });

    if (!plan) {
      throw new Error('Subscription plan not found');
    }

    if (planData.name) {
      plan.name = planData.name;
    }

    if (planData.description) {
      plan.description = planData.description;
    }

    if (planData.price) {
      plan.price = parseFloat(planData.price);  
    }

    if (planData.features) {
      plan.features = planData.features;
    }

    return this.planRepository.save(plan);
  }

  async deletePlan(id: number): Promise<void> {
    await this.planRepository.delete(id);
  }

  async getAllPlans(): Promise<SubscriptionPlan[]> { 
    return this.planRepository.find();
  }
}