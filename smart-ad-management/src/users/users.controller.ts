import { Controller, Get, UseGuards, Request, Param } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/auth.guard';
import { UsersService } from './users.service';

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Get('profile/:id')
  async getProfile(@Request() req, @Param('id') id: number) {
 
    const user = req.user;
    const profile = await this.userService.getProfile(user, id);

    if (profile) {
      return profile;
    } else {
      return { message: 'Unauthorized' };
    }
  }
}