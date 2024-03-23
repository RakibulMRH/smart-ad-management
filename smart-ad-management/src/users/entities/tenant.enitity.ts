import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { User } from './user.entity';
import { OneToOne } from 'typeorm';
import { Subscription } from '../../subscription/entities/subscription.entity';

@Entity('Tenant')
export class Tenant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, unique: true })
  name: string;

  @Column({ nullable: false, unique: true })
  domain: string;

  @Column({ nullable: false })
  subscriptionPlan: string;

  @Column({ nullable: true })
  paymentDetails: string;

  @OneToMany(() => User, user => user.tenant)
  users: User[];

  @OneToOne(() => Subscription, subscription => subscription.tenant)
  subscription: Subscription;
}