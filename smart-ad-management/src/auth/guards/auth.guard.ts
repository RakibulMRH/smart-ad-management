import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';
import { BlacklistedTokenService } from '../../blacklisted-token/blacklisted-token.service';
import { Inject } from '@nestjs/common';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {   
  constructor(
    @Inject(BlacklistedTokenService)
    private readonly tokenBlacklistService: BlacklistedTokenService,
  ) {
    super();
  }
  async canActivate(
  context: ExecutionContext,
): Promise<boolean> {
  const request = context.switchToHttp().getRequest();
  const token = request.headers.authorization?.split(' ')[1];

  if (await this.tokenBlacklistService.isBlacklisted(token)) { 
    throw new UnauthorizedException("Token has been blacklisted");
  }

  console.log('Inside JWT AuthGuard canActivate');
  return super.canActivate(context) as Promise<boolean>;;
}

  handleRequest(err, user, info, context) {
    if (err || !user) {
      throw err || new UnauthorizedException();
    } 
    context.switchToHttp().getRequest().user = user;
    return user;
  }
}


