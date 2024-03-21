import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';

@Entity('UserSession')
export class UserSession {
  @PrimaryGeneratedColumn()
  session_id: number;

  @Column()
  session_token: string;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ nullable: true })
  expires_at: Date;

  @ManyToOne(() => User, user => user.userSessions, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;
}