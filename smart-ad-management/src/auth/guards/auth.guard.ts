import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { UsersService } from '../../users/users.service';
import { User } from '../../users/entities/user.entity';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly usersService: UsersService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authorizationHeader = request.headers['authorization'];
  
    if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
      return false; // No authorization header or invalid format
    }
  
    const sessionToken = authorizationHeader.split(' ')[1];
    //console.log('Received session token:', sessionToken); // Add this line

    if (!sessionToken) {
      return false; // No session token provided
    }
  
    // Call your UsersService's findBySessionToken method to verify the session token
    const user = await this.usersService.findBySessionToken(sessionToken);
    if (!user) {
      return false; // Invalid session token
    }
  
    // Attach the user object to the request.user property
    request.user = user;
    return true;
  }
  
}