import { Controller, Get, UseGuards, Request, Param } from '@nestjs/common';
import { AuthGuard } from '../auth/guards/auth.guard';
import { UsersService } from './users.service';

@Controller('users')
@UseGuards(AuthGuard)
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Get('profile/:id')
  async getProfile(@Request() req, @Param('id') id: number) {
 
    const user = req.user;
    //console.log('Received user from request:', user); 
    const profile = await this.userService.getProfile(user, id);

    // return the profile or handle the case when it's undefined
    if (profile) {
      return profile;
    } else {
      // handle the case when the user is not authorized to access the profile
      return { message: 'Unauthorized' };
    }
  }
}