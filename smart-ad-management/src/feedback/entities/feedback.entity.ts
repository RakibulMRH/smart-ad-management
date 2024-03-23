import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Reply } from './reply.entity';
@Entity('Feedback')
export class Feedback {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  rating: number;

  @Column({ nullable: false })
  comment: string;

  @Column({ nullable: false, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ManyToOne(() => User, user => user.feedbackReceived)
  @JoinColumn({ name: 'adExpertId' })
  adExpert: User;

  @ManyToOne(() => User, user => user.feedbackGiven)
  @JoinColumn({ name: 'clientId' })
  client: User;

  @OneToMany(() => Reply, reply => reply.feedback)
  replies: Reply[];
}