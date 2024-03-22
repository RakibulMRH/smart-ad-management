// profile.controller.ts
import { Controller, Post, Body, UseGuards, Request, UploadedFile, UseInterceptors, Headers } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { AuthGuard } from '../auth/guards/auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post('update')
  @UseGuards(AuthGuard)
  @UseInterceptors(FileInterceptor('profilePicture'))
  updateProfile(@Request() req, @Body() updateProfileDto: UpdateProfileDto, @UploadedFile() file: Express.Multer.File, @Headers('authorization') authorization: string) {
    const sessionToken = authorization.split(' ')[1];
    return this.profileService.updateProfile(req.user, updateProfileDto, file);
  }
}
