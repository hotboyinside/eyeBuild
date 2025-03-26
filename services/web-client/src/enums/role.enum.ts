export enum Role {
  SUPERADMIN = "superadmin",
  ADMIN = "admin",
  FRANCHISEE = "franchisee",
  CLIENT = "client",
}

export const RoleHierarchy = {
  [Role.CLIENT]: 0,
  [Role.FRANCHISEE]: 1,
  [Role.ADMIN]: 2,
  [Role.SUPERADMIN]: 3,
} as const;

export const REGULAR_USERS: Role[] = [Role.ADMIN, Role.FRANCHISEE, Role.CLIENT];
export const ALL_ADMINS: Role[] = [
  Role.SUPERADMIN,
  Role.ADMIN,
  Role.FRANCHISEE,
];
