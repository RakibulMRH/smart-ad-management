import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserSession } from './entities/userSession.entity';
import { UsersService } from './users.service';
import { UserController } from './users.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserSession])],
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UserController], 
})
export class UsersModule {}