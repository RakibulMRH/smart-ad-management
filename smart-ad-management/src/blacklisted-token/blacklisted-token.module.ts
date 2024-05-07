import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlacklistedToken } from './entities/blacklisted-token.entity';
import { BlacklistedTokenService } from './blacklisted-token.service';

@Module({
  imports: [TypeOrmModule.forFeature([BlacklistedToken])],
  providers: [BlacklistedTokenService],
  exports: [BlacklistedTokenService],
})
export class BlacklistedTokenModule {}