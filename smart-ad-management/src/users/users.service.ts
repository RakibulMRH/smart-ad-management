import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { UserSession } from './entities/userSession.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(UserSession)
    private userSessionRepository: Repository<UserSession>,
  ) {}
  
  async getProfile(user: User, id: number): Promise<User | undefined> {
    
    return this.usersRepository.findOne({ where: { id } });
  }

  findByEmail(email: string): Promise<User> {
    return this.usersRepository.findOne({ where: { email } });
  }

  create(user: Partial<User>): Promise<User> {
    const newUser = this.usersRepository.create(user);
    return this.usersRepository.save(newUser);
  }

  createSessionToken(userId: number, sessionToken: string): Promise<UserSession> {
    const newUserSession = this.userSessionRepository.create({
      user: { id: userId },
      session_token: sessionToken,
    });
    return this.userSessionRepository.save(newUserSession);
  }
  
  async removeSessionToken(sessionToken: string) {
    const userSession = await this.userSessionRepository.findOne({ where: { session_token: sessionToken } });
    await this.userSessionRepository.remove(userSession);
  }

  findBySessionToken(sessionToken: string): Promise<User> {
    return this.usersRepository
      .createQueryBuilder('user')
      .innerJoinAndSelect('user.userSessions', 'userSessions')
      .where('userSessions.session_token = :sessionToken', { sessionToken })
      .getOne();
  }

  async updateResetPasswordToken(userId: number, resetToken: string, resetPasswordExpires: Date) {
    await this.usersRepository.update(userId, { resetPasswordToken: resetToken, resetPasswordExpires });
  }

  async findByResetPasswordToken(token: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: { resetPasswordToken: token } });
  }

  async resetPassword(userId: number, newPassword: string) {
    await this.usersRepository.update(userId, { password: newPassword, resetPasswordToken: null, resetPasswordExpires: null });
  }

  
}