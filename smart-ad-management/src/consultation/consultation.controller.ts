import { Body, Controller, Post, Get, UseGuards, Request, Delete } from '@nestjs/common';
import { ConsultationService } from './consultation.service';
import { CreateConsultationDto } from './dto/create-consultation.dto';
import { BookConsultationDto } from './dto/book-consultation.dto';
import { JwtAuthGuard } from '../auth/guards/auth.guard';
import { UserDecorator } from '../users/entities/user.entity';
import { User, UserType } from '../users/entities/user.entity';

@Controller('consultation')
export class ConsultationController {
  constructor(private readonly consultationService: ConsultationService) {}

  @Post('slot')
  @UseGuards(JwtAuthGuard)
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
  @UseGuards(JwtAuthGuard)
  async getConsultationSlot(@UserDecorator() adExpert: User) {
    if (adExpert.type !== UserType.AdExpert) {
      throw new Error('Only ad experts can create consultation slots');
    }
    return this.consultationService.getConsultationSlot(adExpert);
  }

  @Post('book')
  @UseGuards(JwtAuthGuard)
  async bookConsultation(
    @Body() bookConsultationDto: BookConsultationDto,
    @UserDecorator() client: User,
  ) {
    return this.consultationService.bookConsultation(bookConsultationDto, client);
  }
  
  @Get('upcoming')
  @UseGuards(JwtAuthGuard)
  async getUpcomingConsultations(@UserDecorator() user: User) {
    return this.consultationService.getUpcomingConsultations(user);
  }

  @Delete('cancel/:consultationId')
  @UseGuards(JwtAuthGuard) 
  async cancelConsultation(@Request() req,  @UserDecorator() adExpert: User,
  ) { 
    if (adExpert.type !== UserType.AdExpert) {
      throw new Error('Only ad experts can create consultation slots');
    }
    return this.consultationService.cancelConsultation(req.params.consultationId, adExpert);
  }

}