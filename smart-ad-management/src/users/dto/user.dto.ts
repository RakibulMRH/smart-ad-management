import { IsEmail, IsNotEmpty, MinLength, MaxLength, Matches } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
 /*@MinLength(8)
  @MaxLength(20)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, { message: 'Password too weak' })*/
  password: string;
  
  resetPasswordToken: string;
  
  resetPasswordExpires: Date;
  
  @IsNotEmpty()
  @Matches(/^(admin|client|ad_expert)$/, { message: 'Invalid user type' })
  type: string;
}
