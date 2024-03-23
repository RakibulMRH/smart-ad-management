import { IsNotEmpty, IsNumber, IsString, Max, Min } from 'class-validator';

export class CreateFeedbackDto {
  @IsNumber()
  @Min(1)
  @Max(5)
  @IsNotEmpty()
  rating: number;

  @IsString()
  @IsNotEmpty()
  comment: string;

  @IsNumber()
  @IsNotEmpty()
  adExpertId: number;

  @IsNumber()
  @IsNotEmpty()
  clientId: number;
}