import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subscription } from './entities/subscription.entity';
import { Tenant } from '../users/entities/tenant.enitity';
import { SubscriptionPlan } from '../subscription-plan/entities/subscriptionPlan.entity';
import { CreateSubscriptionDto } from './dto/createSubscription.dto';

@Injectable()
export class SubscriptionService {
  constructor(
    @InjectRepository(Subscription)
    private subscriptionRepository: Repository<Subscription>,
    @InjectRepository(Tenant)
    private tenantRepository: Repository<Tenant>,
    @InjectRepository(SubscriptionPlan)
    private planRepository: Repository<SubscriptionPlan>,
  ) {}

  async createSubscription(createSubscriptionDto: CreateSubscriptionDto): Promise<Subscription> {
    const { tenantId, planId, paymentMethod } = createSubscriptionDto;
    const tenant = await this.tenantRepository.findOne({ where: { id: tenantId } });
    const plan = await this.planRepository.findOne({ where: { id: planId } });

    if (!tenant || !plan) {
      throw new Error('Invalid tenant or subscription plan');
    }

    const subscription = new Subscription();
    subscription.tenant = tenant;
    subscription.plan = plan;
    subscription.startDate = new Date();
    subscription.endDate = this.calculateEndDate(plan.name);
    subscription.paymentStatus = 'Pending';
    subscription.paymentMethod = paymentMethod;

    return this.subscriptionRepository.save(subscription);
  }

  async updateSubscription(id: number, paymentStatus: string): Promise<Subscription> {
    const subscription = await this.subscriptionRepository.findOne({ where: { id } });

    if (!subscription) {
      throw new Error('Subscription not found');
    }

    subscription.paymentStatus = paymentStatus;
    return this.subscriptionRepository.save(subscription);
  }

  async getSubscriptionByTenant(tenantId: number): Promise<Subscription> {
    return this.subscriptionRepository.findOne({ where: { tenant: { id: tenantId } } });
  }

  async getAllSubscriptions(): Promise<Subscription[]> {
    return this.subscriptionRepository.find();
  }
  private calculateEndDate(planName: string): Date 
  {
    if (planName === 'Basic') {
        return new Date(new Date().setMonth(new Date().getMonth() + 1));
      }
      if (planName === 'Pro') {
        return new Date(new Date().setMonth(new Date().getMonth() + 3));
      }
      if (planName === 'Yearly') {
        return new Date(new Date().setFullYear(new Date().getFullYear() + 1));
      }

    return new Date();
  }
}