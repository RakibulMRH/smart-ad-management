import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm'; 
import {  ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import config from 'ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(config),UsersModule,AuthModule],
  controllers: [AppController],
  providers: [
    {provide: APP_PIPE, useClass: ValidationPipe},AppService],
})
export class AppModule {}