import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';
import { User } from '../users/entities/user.entity';
import { FileUploadModule } from '../file-upload/file-upload.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]), // Only include entities here
    UsersModule, // Import UsersModule here
    FileUploadModule, 
  ],
  controllers: [ProfileController],
  providers: [ProfileService],
})
export class ProfileModule {}