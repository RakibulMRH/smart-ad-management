import { IsDateString, IsNotEmpty } from 'class-validator';

export class CreateConsultationDto {
  @IsNotEmpty()
  adExpertId: number;

  @IsNotEmpty()
  @IsDateString()
  startTime: Date;

  @IsNotEmpty()
  @IsDateString()
  endTime: Date;
}