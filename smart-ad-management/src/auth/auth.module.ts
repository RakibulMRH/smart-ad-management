import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSession } from 'src/users/entities/userSession.entity';
import { User } from '../users/entities/user.entity';  
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../auth/strategies/jwt.strategy';
import { BlacklistedTokenModule } from 'src/blacklisted-token/blacklisted-token.module';

@Module({
  imports: [ 
    JwtModule.register({
      secret: 'secretKey',  
      signOptions: { expiresIn: 3 * 24 * 60 * 60 * 1000 },  
    }),
    TypeOrmModule.forFeature([UserSession, User]) ,
    BlacklistedTokenModule ,
  ],
  controllers: [AuthController],
  providers: [AuthService, UsersService, JwtModule, JwtStrategy],
})
export class AuthModule {}  