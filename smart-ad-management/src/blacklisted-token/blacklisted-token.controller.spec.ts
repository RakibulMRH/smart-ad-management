import { Test, TestingModule } from '@nestjs/testing';
import { BlacklistedTokenController } from './blacklisted-token.controller';

describe('BlacklistedTokenController', () => {
  let controller: BlacklistedTokenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlacklistedTokenController],
    }).compile();

    controller = module.get<BlacklistedTokenController>(BlacklistedTokenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
