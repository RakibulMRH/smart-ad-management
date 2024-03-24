import { AppController } from './app.controller';
import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm'; 
import {  ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { ProfileModule } from './profile/profile.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { SubscriptionPlanModule } from './subscription-plan/subscription-plan.module';
import { FileUploadModule } from './file-upload/file-upload.module';
import { FeedbackModule } from './feedback/feedback.module';
import { ConsultationModule } from './consultation/consultation.module';
import { DashboardModule } from './dashboard/dashboard.module';

import config from 'ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(config),UsersModule,DashboardModule,AuthModule,ProfileModule,SubscriptionModule,SubscriptionPlanModule,FileUploadModule,FeedbackModule,ConsultationModule],
  controllers: [AppController],
  providers: [{provide: APP_PIPE, useClass: ValidationPipe},AppService] })
  export class AppModule {
    configure(consumer: MiddlewareConsumer) {
      consumer
        .apply(LoggerMiddleware)
        .forRoutes({ path: '*', method: RequestMethod.ALL });
    }
  }