//user.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { UserSession } from './userSession.entity';
import { ManyToOne } from 'typeorm';
import { Tenant } from './tenant.enitity';
import { Subscription } from '../../subscription/entities/subscription.entity'; // import Subscription
import { Feedback } from '../../feedback/entities/feedback.entity';
import { Reply } from '../../feedback/entities/reply.entity';

@Entity('User')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  firstName: string;

  @Column({ nullable: false })
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  resetPasswordToken: string;

  @Column({ nullable: true })
  resetPasswordExpires: Date;

  @Column({ nullable: false })
  type: string;

  @Column({ nullable: true })
  profilePicture: string;

  @OneToMany(() => UserSession, userSession => userSession.user)
  userSessions: UserSession[];
  
  @ManyToOne(() => Tenant, tenant => tenant.users)
  tenant: Tenant;

  @OneToMany(() => Subscription, subscription => subscription.user) // add this line
  subscriptions: Subscription[]; 

  @OneToMany(() => Feedback, feedback => feedback.adExpert)
  feedbackReceived: Feedback[];

  @OneToMany(() => Feedback, feedback => feedback.client)
  feedbackGiven: Feedback[];

  @OneToMany(() => Reply, reply => reply.user)
  replies: Reply[];
}

export enum UserType {
  Admin = 'admin',
  Client = 'client',
  AdExpert = 'adExpert',
  // add more user types as needed
}

import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const UserDecorator = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);