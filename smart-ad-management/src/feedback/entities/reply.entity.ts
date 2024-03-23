import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Feedback } from './feedback.entity';
import { User } from '../../users/entities/user.entity';
import { OneToMany } from 'typeorm';

@Entity('Reply')
export class Reply {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  comment: string;

  @Column({ nullable: false, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ManyToOne(() => Feedback, feedback => feedback.replies)
  @JoinColumn({ name: 'feedbackId' })
feedback: Feedback;

@ManyToOne(() => User, user => user.replies)
@JoinColumn({ name: 'userId' })
user: User;

@ManyToOne(() => Reply, reply => reply.replies, { nullable: true })
@JoinColumn({ name: 'parentReplyId' })
parentReply: Reply;

@OneToMany(() => Reply, reply => reply.parentReply)
replies: Reply[];
}