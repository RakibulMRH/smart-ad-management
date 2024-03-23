import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { User } from './user.entity';

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

  /*@OneToMany(() => User, user => user.tenant)
  users: User[];*/
}