import { IsNotEmpty, IsNumberString, IsArray, IsOptional } from 'class-validator';

export class UpdateSubscriptionPlanDto {
  @IsNotEmpty()
  @IsOptional()
  name: string;

  @IsNotEmpty()
  @IsOptional()
  description: string;

  @IsNumberString()
  @IsOptional()
  price: string;

  @IsArray()
  @IsOptional()
  features: string[];
}