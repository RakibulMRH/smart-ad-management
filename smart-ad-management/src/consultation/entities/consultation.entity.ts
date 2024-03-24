import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { ConsultationSlot } from './consultationSlot.entity';

@Entity('Consultation')
export class Consultation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status: string;

  @Column({ type: 'timestamp', nullable: true })
  scheduledAt: Date;

  @ManyToOne(() => User, (user) => user.consultationsBooked, { onDelete: 'CASCADE' })
  @JoinColumn()
  client: User;

  @ManyToOne(() => User, (user) => user.consultationsHosted, { onDelete: 'CASCADE' })
  @JoinColumn()
  adExpert: User;

  @ManyToOne(() => ConsultationSlot, (slot) => slot.consultations, { onDelete: 'CASCADE' })
  @JoinColumn()
  slot: ConsultationSlot;

  @Column({ nullable: true })
  waitingListPosition: number;
}