import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
  logger.log('Application started');
}
bootstrap();