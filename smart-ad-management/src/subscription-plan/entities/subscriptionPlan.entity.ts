import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Subscription } from '../../subscription/entities/subscription.entity';

@Entity('SubscriptionPlan')
export class SubscriptionPlan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, unique: true })
  name: string;

  @Column({ nullable: false })
  description: string;

  @Column({ type: 'decimal', nullable: false })
  price: number;

  @Column({ nullable: false, type: 'simple-array' })
  features: string[];

  @OneToMany(() => Subscription, subscription => subscription.plan)
  subscriptions: Subscription[];
}