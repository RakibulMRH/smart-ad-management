import { IsNotEmpty, IsEmail, Matches, IsString } from 'class-validator';

export class LoginDto {

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}

export class RegisterDto {
 
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  @Matches(/^(admin|client|adExpert)$/, { message: 'Invalid user type' })
  type: string;
}

export class ForgotPasswordDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;
}

export class ResetPasswordDto {
  @IsNotEmpty()
  token: string;

  @IsNotEmpty()
  newPassword: string;
}

export class SessionTokenDto {
  @IsNotEmpty()
  sessionToken: string;
}
