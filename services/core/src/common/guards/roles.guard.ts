import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from 'src/common/enums/roles.enum';
import { UserDocument } from 'src/users/schemas/user.schema';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<Role[]>(
      'roles',
      context.getHandler(),
    );

    if (!requiredRoles) {
      return true;
    }

    const request: Request & { user: UserDocument } = context
      .switchToHttp()
      .getRequest();

    const user = request.user;
    if (!user) {
      throw new UnauthorizedException('You need to be logged in');
    }

    if (!requiredRoles.includes(user.role)) {
      throw new UnauthorizedException(
        'You do not have permission to access this resource',
      );
    }
    return true;
  }
}
