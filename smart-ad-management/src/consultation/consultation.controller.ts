import { Body, Controller, Post, Get, UseGuards, Request } from '@nestjs/common';
import { ConsultationService } from './consultation.service';
import { CreateConsultationDto } from './dto/create-consultation.dto';
import { BookConsultationDto } from './dto/book-consultation.dto';
import { AuthGuard } from '../auth/guards/auth.guard';
import { UserDecorator } from '../users/entities/user.entity';
import { User, UserType } from '../users/entities/user.entity';

@Controller('consultation')
export class ConsultationController {
  constructor(private readonly consultationService: ConsultationService) {}

  @Post('slot')
  @UseGuards(AuthGuard)
  async createConsultationSlot(
    @Body() createConsultationDto: CreateConsultationDto,
    @UserDecorator() adExpert: User,
  ) {
    if (adExpert.type !== UserType.AdExpert) {
      throw new Error('Only ad experts can create consultation slots');
    }
    return this.consultationService.createConsultationSlot(createConsultationDto, adExpert);
  }
    @Get('slot')
    @UseGuards(AuthGuard)
    async getConsultationSlot(@UserDecorator() adExpert: User) {
      if (adExpert.type !== UserType.AdExpert) {
        throw new Error('Only ad experts can create consultation slots');
      }
      return this.consultationService.getConsultationSlot(adExpert);
    }

  @Post('book')
  @UseGuards(AuthGuard)
  async bookConsultation(
    @Body() bookConsultationDto: BookConsultationDto,
    @UserDecorator() client: User,
  ) {
    return this.consultationService.bookConsultation(bookConsultationDto, client);
  }
  
    @Get('upcoming')
    @UseGuards(AuthGuard)
    async getUpcomingConsultations(@UserDecorator() user: User) {
      return this.consultationService.getUpcomingConsultations(user);
    }

}