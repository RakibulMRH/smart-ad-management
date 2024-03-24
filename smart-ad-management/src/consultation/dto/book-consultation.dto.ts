import { IsNotEmpty } from 'class-validator';

export class BookConsultationDto {
  @IsNotEmpty()
  adExpertId: number;

  @IsNotEmpty()
  slotId: number;
}