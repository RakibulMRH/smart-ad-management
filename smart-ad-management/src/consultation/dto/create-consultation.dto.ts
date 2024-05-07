import { IsDateString, IsNotEmpty } from 'class-validator';

export class CreateConsultationDto {

  @IsNotEmpty()
  @IsDateString()
  startTime: Date;

  @IsNotEmpty()
  @IsDateString()
  endTime: Date;
}