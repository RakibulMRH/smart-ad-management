import { IsNotEmpty, IsNumber, IsArray } from 'class-validator';

export class CreateSubscriptionPlanDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNumber()
  price: number;

  @IsArray()
  features: string[];
}