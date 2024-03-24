import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Consultation } from './consultation.entity';

@Entity('ConsultationSlot')
export class ConsultationSlot {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  startTime: Date;

  @Column()
  endTime: Date;

  @ManyToOne(() => User, (user) => user.consultationSlots, { onDelete: 'CASCADE' })
  @JoinColumn()
  adExpert: User;

  @OneToMany(() => Consultation, (consultation) => consultation.slot)
  consultations: Consultation[];
}