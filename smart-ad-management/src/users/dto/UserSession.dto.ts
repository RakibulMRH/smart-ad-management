import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { UserDto } from './user.dto';

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

  @ManyToOne(() => UserDto, user => user.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: UserDto;
}