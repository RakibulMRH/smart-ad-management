import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BlacklistedToken } from './entities/blacklisted-token.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BlacklistedTokenService {
  constructor(
    @InjectRepository(BlacklistedToken)
    private blacklistedTokenRepository: Repository<BlacklistedToken>,
  ) {}

  async addToBlacklist(token: string, expiration: Date) {
    const newBlacklistedToken = this.blacklistedTokenRepository.create({
      token,
      expiration,
    });
    await this.blacklistedTokenRepository.save(newBlacklistedToken);
  }

 async isBlacklisted(token: string): Promise<boolean> {
  const blacklistedToken = await this.blacklistedTokenRepository.findOne({
    where: { token },
  });

  console.log('Checking token:', token);
  console.log('Found in blacklist:', blacklistedToken);

  return !!blacklistedToken;
}
}