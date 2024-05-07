import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';
import { User } from '../users/entities/user.entity';
import { FileUploadModule } from '../file-upload/file-upload.module';
import { UsersModule } from 'src/users/users.module';
import { BlacklistedTokenModule } from 'src/blacklisted-token/blacklisted-token.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]), 
    UsersModule, 
    FileUploadModule, BlacklistedTokenModule
  ],
  controllers: [ProfileController],
  providers: [ProfileService],
})
export class ProfileModule {}