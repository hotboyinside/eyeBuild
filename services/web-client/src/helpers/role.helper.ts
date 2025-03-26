import { Role, RoleHierarchy } from "@/enums/role.enum";

export const isRoleHigher = (currentRole: Role, targetRole: Role): boolean => {
  return RoleHierarchy[currentRole] > RoleHierarchy[targetRole];
};

export const isRoleLower = (currentRole: Role, targetRole: Role): boolean => {
  return RoleHierarchy[currentRole] < RoleHierarchy[targetRole];
};

export const isSameRole = (currentRole: Role, targetRole: Role): boolean => {
  return currentRole === targetRole;
};
