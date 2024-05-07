import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Consultation } from './entities/consultation.entity';
import { Repository } from 'typeorm';
import { CreateConsultationDto } from './dto/create-consultation.dto';
import { User, UserType } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';
import { ConsultationSlot } from './entities/consultationSlot.entity';
import { BookConsultationDto } from './dto/book-consultation.dto';
import { Logger } from '@nestjs/common';
import { MoreThan } from 'typeorm';


@Injectable()
export class ConsultationService {
    constructor(
        @InjectRepository(Consultation)
        private consultationRepository: Repository<Consultation>,
        @InjectRepository(ConsultationSlot)
        private slotRepository: Repository<ConsultationSlot>,
        private usersService: UsersService,
        @InjectRepository(User)
        private usersRepository: Repository<User>, // Inject usersRepository
    ) {}

  async createConsultationSlot(createConsultationDto: CreateConsultationDto, adExpert: User) {
    console.log('createConsultationDto:', createConsultationDto);
    console.log('adExpert:', adExpert);

    const slot = this.slotRepository.create({
      startTime: createConsultationDto.startTime,
      endTime: createConsultationDto.endTime,
      adExpert,
    });

    try {
      const savedSlot = await this.slotRepository.save(slot);
      return savedSlot;
    } catch (error) {
      console.error('Error saving slot:', error);
      throw error;
    }
  }
  async bookConsultation(bookConsultationDto: BookConsultationDto, client: User) {
    const adExpert = await this.usersService.findOne(bookConsultationDto.adExpertId);
    if (!adExpert || adExpert.type !== UserType.AdExpert) {
      throw new NotFoundException('Ad expert not found');
    }

    const slot = await this.slotRepository.findOne({
      where: { id: bookConsultationDto.slotId, adExpert },
      relations: ['consultations'],
    });

    if (!slot) {
      throw new NotFoundException('Consultation slot not found');
    }

    const consultation = this.consultationRepository.create({
        scheduledAt: slot.startTime,
      client,
      adExpert,
      slot,
      status: 'booked',
    });

    if (slot.consultations.length > 0) {
      consultation.status = 'waiting';
      consultation.waitingListPosition = slot.consultations.length + 1;
    }

    return this.consultationRepository.save(consultation);
  }
 
    async getConsultationSlot(adExpert: User) {
        const query = this.slotRepository
            .createQueryBuilder('slot')
            .leftJoinAndSelect('slot.consultations', 'consultation')
            .where('slot.adExpert = :adExpertId', { adExpertId: adExpert.id });

        console.log('Generated SQL Query:', query.getSql()); // Log the generated SQL query
        return query.getMany();
    }

    // get getUpcomingConsultations(user: User) from the consultation table that has user as either the client or adExpert and the scheduledAt is in the future and status is booked
    async getUpcomingConsultations(user: User) {
        if (user.type === UserType.AdExpert) {
          const query = this.consultationRepository
            .createQueryBuilder('consultation')
            .leftJoinAndSelect('consultation.client', 'client')
            .leftJoinAndSelect('consultation.slot', 'slot')
            .where('consultation.adExpert = :adExpertId', { adExpertId: user.id });
    
          console.log('Generated SQL Query:', query.getSql()); // Log the generated SQL query
          return query.getMany();
        } else if (user.type === UserType.Client) {
          const query = this.consultationRepository
            .createQueryBuilder('consultation')
            .leftJoinAndSelect('consultation.adExpert', 'adExpert')
            .leftJoinAndSelect('consultation.slot', 'slot')
            .where('consultation.client = :clientId', { clientId: user.id });
    
          console.log('Generated SQL Query:', query.getSql()); // Log the generated SQL query
          return query.getMany();
        } else {
      throw new Error('Invalid user type');
    }
  }
  async cancelConsultation(consultationId: string, user: User) {
    const consultation = await this.consultationRepository.findOne({
      where: { id: Number(consultationId) },
      relations: ['client', 'adExpert', 'slot'],
    });

    if (!consultation) {
      throw new NotFoundException('Consultation not found');
    }

    if (consultation.client.id !== user.id && consultation.adExpert.id !== user.id) {
      throw new Error('You are not authorized to cancel this consultation');
    }

    if (consultation.status === 'cancelled') {
      throw new Error('Consultation is already cancelled');
    }

    consultation.status = 'cancelled';
    await this.consultationRepository.save(consultation);

    return { message: 'Consultation cancelled successfully' };
  }
}