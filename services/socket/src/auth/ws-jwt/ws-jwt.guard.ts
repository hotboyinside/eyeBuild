import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { verify } from 'jsonwebtoken';
import { Observable } from 'rxjs';
import { Socket } from 'socket.io';
import { JWT_SECRET, COOKIE_SECRET } from 'constants/env';
import * as cookieParser from 'cookie-parser';

@Injectable()
export class WsJwtGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    if (context.getType() !== 'ws') {
      return true;
    }

    const client: Socket = context.switchToWs().getClient();
    try {
      const payload = WsJwtGuard.validateToken(client);
      console.log('payload', payload);
      if (!payload) {
        // v constantu
        throw new UnauthorizedException('Invalid Token');
      }
      return true;
    } catch (error) {
      console.error(error);
      client.disconnect();
      return false;
    }
  }

  static validateToken(client: Socket) {
    const { authorization } = client.handshake.headers;
    if (!authorization) {
      // v constantu
      throw new UnauthorizedException('Authorization header missing');
    }
    const token = authorization?.split(' ')[1];

    console.log('token', token);
    if (!token) {
      throw new UnauthorizedException('Token missing');
    }

    const unparsedToken = cookieParser.signedCookie(token, COOKIE_SECRET);
    try {
      console.log('JWT_SECRET', JWT_SECRET);
      return verify(unparsedToken as string, JWT_SECRET);
    } catch (error) {
      // v constantu
      throw new UnauthorizedException('Invalid token', error);
    }
  }
}
