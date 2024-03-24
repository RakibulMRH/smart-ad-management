// consultation.module.ts
import { Module } from '@nestjs/common';
import { ConsultationService } from './consultation.service';
import { ConsultationController } from './consultation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Consultation } from './entities/consultation.entity';
import { UsersModule } from '../users/users.module';
import { ConsultationSlot } from './entities/consultationSlot.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Consultation,ConsultationSlot]), UsersModule],
  providers: [ConsultationService],
  controllers: [ConsultationController],
})
export class ConsultationModule {}