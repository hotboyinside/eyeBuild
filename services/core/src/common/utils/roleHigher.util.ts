import { Role, RoleHierarchy } from '../enums/roles.enum';

export const isRoleHigher = (userRole: Role, requiredRole: Role): boolean => {
  return RoleHierarchy[userRole] > RoleHierarchy[requiredRole];
};
