import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { UsersService } from '../../users/users.service';
import { User } from '../../users/entities/user.entity';

@Injectable()
export class SubscriptionPlanGuard implements CanActivate {
  constructor(private readonly usersService: UsersService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authorizationHeader = request.headers['authorization'];
  
    if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
      return false;  
    }
  
    const sessionToken = authorizationHeader.split(' ')[1];
    //console.log('Received session token:', sessionToken);  

    if (!sessionToken) {
      return false;  
    }
   
    const user = await this.usersService.findBySessionToken(sessionToken);
    if (!user) {
      return false;  
    }
  
    if (user.type !== 'admin') {
      return false; 
    }

    request.user = user;
    return true;
  }
  
}