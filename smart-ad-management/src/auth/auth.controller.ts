import { Controller, Post, Body, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/auth.dto'; 
import { ForgotPasswordDto } from './dto/auth.dto';
import { RegisterDto } from './dto/auth.dto';
import { ResetPasswordDto } from './dto/auth.dto';
import { SessionTokenDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() authDto: LoginDto) { 
    return this.authService.validateUser(authDto.email, authDto.password);
  }

  @Post('register')
  async register(@Body() authDto: RegisterDto) { 
    return this.authService.register(authDto.email, authDto.password, authDto.type);
  }

  @Post('forgot-password')
  async forgotPassword(@Body() forgotPasswordDto: ForgotPasswordDto) {
    return this.authService.forgotPassword(forgotPasswordDto.email);
  }

  @Post('reset-password')
  async resetPassword(@Body() resetPasswordDto: ResetPasswordDto) {
    return this.authService.resetPassword(resetPasswordDto.token, resetPasswordDto.newPassword);
  }

  @Post('logout')
  async logout(@Body() sessionTokenDto: SessionTokenDto) {
    return this.authService.logout(sessionTokenDto.sessionToken);
  }
}
