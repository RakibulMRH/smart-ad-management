import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Express } from 'express';
import * as bcrypt from 'bcrypt';

@Injectable()
export class ProfileService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {}

    async updateProfile(user: User, updateProfileDto: UpdateProfileDto, file: Express.Multer.File) {
        const updatedUser = { ...user, ...updateProfileDto };
        if (file) {
            updatedUser.profilePicture = file.filename; 
        }
        //if password is provided hash it and save it
        if (updateProfileDto.password) {
            updatedUser.password = await bcrypt.hash(updateProfileDto.password, 10);
        }
        return this.usersRepository.save(updatedUser);
    }
}