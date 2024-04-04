import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTextDto {
  @IsString()
  @IsNotEmpty()
  readonly prompt: string;
}