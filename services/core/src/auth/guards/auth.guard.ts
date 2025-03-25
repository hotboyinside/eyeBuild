import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { Response, Request } from 'express';
import { Reflector } from '@nestjs/core';
import { AuthService } from '../auth.service';
import { Types } from 'mongoose';
import { PUBLIC_KEY } from '../decorators/public.decorator';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
    private readonly reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride<boolean>(PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) return true;

    const req = context.switchToHttp().getRequest<Request>();
    const res = context.switchToHttp().getResponse<Response>();

    const { accessToken, refreshToken } = req.signedCookies;
    if (!accessToken && !refreshToken) {
      return this.unauthorized(res, 'Tokens not found');
    }
    let payload = await this.authService.verifyToken(
      accessToken as string,
      'access',
    );
    if (!payload && refreshToken) {
      payload = await this.authService.verifyToken(
        refreshToken as string,
        'refresh',
      );
      if (payload) {
        return this.refreshAccessToken(req, res, payload.sub);
      }
    }

    if (!payload) {
      return this.unauthorized(res, 'Invalid tokens');
    }

    return this.validateUser(req, res, payload.sub);
  }

  private async refreshAccessToken(
    req: Request,
    res: Response,
    userId: Types.ObjectId,
  ) {
    const user = await this.usersService.findOne(userId);
    if (!user || user.isBanned) {
      return this.unauthorized(res, user ? 'User is banned' : 'User not found');
    }

    const newAccessToken = await this.authService.generateAccessToken(
      this.authService.getPayload(user),
    );

    res.cookie('accessToken', newAccessToken, {
      ...this.authService.cookieOptions,
      maxAge: this.authService.jwtExpiresIn,
    });

    req.user = user;
    return true;
  }

  private async validateUser(
    req: Request,
    res: Response,
    userId: Types.ObjectId,
  ) {
    const user = await this.usersService.findOne(userId);
    if (!user || user.isBanned) {
      return this.unauthorized(res, user ? 'User is banned' : 'User not found');
    }

    req.user = user;
    return true;
  }

  private unauthorized(res: Response, message: string): never {
    res.clearCookie('accessToken');
    res.clearCookie('refreshToken');
    throw new UnauthorizedException(message);
  }
}
