import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Tenant } from '../../users/entities/tenant.enitity';
import { SubscriptionPlan } from '../../subscription-plan/entities/subscriptionPlan.entity';

@Entity('Subscription')
export class Subscription {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ nullable: false })
    startDate: Date;
  
    @Column({ nullable: false })
    endDate: Date;
  
    @Column({ nullable: false })
    paymentStatus: string;
  
    @Column({ nullable: false })
    paymentMethod: string;
  
    @ManyToOne(() => Tenant, tenant => tenant.subscription)
    @JoinColumn()
    tenant: Tenant;
  
    @ManyToOne(() => SubscriptionPlan, plan => plan.subscriptions)
    @JoinColumn()
    plan: SubscriptionPlan;
}