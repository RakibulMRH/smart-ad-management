import { Controller, Post, Body, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/auth.dto'; 
import { ForgotPasswordDto } from './dto/auth.dto';
import { RegisterDto } from './dto/auth.dto';
import { ResetPasswordDto } from './dto/auth.dto';
import { SessionTokenDto } from './dto/auth.dto';
import { JwtAuthGuard } from '../auth/guards/auth.guard';
import { UseGuards } from '@nestjs/common';
import { Request } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { BlacklistedTokenService } from '../blacklisted-token/blacklisted-token.service';
import { UnauthorizedException } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService, 
    private readonly blacklistedTokenService: BlacklistedTokenService,
    private readonly jwtService: JwtService
  ) {}
 
  @Post('login')
  async login(@Body() authDto: LoginDto) { 
    const user = await this.authService.validateUser(authDto.email, authDto.password);
    return this.authService.login(user);
  }

  @Post('register')
  async register(@Body() authDto: RegisterDto) { 
    return this.authService.register(authDto.firstName, authDto.lastName, authDto.email, authDto.password, authDto.type);
  }

  @Post('forgot-password')
  async forgotPassword(@Body() forgotPasswordDto: ForgotPasswordDto) {
    return this.authService.forgotPassword(forgotPasswordDto.email);
  }

  @Post('reset-password')
  async resetPassword(@Body() resetPasswordDto: ResetPasswordDto) {
    return this.authService.resetPassword(resetPasswordDto.token, resetPasswordDto.newPassword);
  }

  @UseGuards(JwtAuthGuard) 
  @Post('logout')
  async logout(@Request() req: Request) {
    const token = (req.headers as any).authorization.split(' ')[1];
    const decodedToken = this.jwtService.decode(token);

    if (!decodedToken) {
      throw new UnauthorizedException('Invalid token');
    }

    const expiration = new Date(decodedToken.exp * 1000);
    await this.blacklistedTokenService.addToBlacklist(token, expiration);
    return this.authService.logout(token);
   }
}