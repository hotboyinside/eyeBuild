import { Injectable } from '@nestjs/common';
import { Role, RoleHierarchy } from '../enums/roles.enum';

@Injectable()
export class RoleService {
  isRoleHigher(currentRole: Role, targetRole: Role): boolean {
    return RoleHierarchy[currentRole] > RoleHierarchy[targetRole];
  }
}
