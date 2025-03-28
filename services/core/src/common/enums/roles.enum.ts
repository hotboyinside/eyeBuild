export enum Role {
  CLIENT = 'client',
  FRANCHISEE = 'franchisee',
  ADMIN = 'admin',
  SUPERADMIN = 'superadmin',
}

export const RoleHierarchy = {
  [Role.CLIENT]: 0,
  [Role.FRANCHISEE]: 1,
  [Role.ADMIN]: 2,
  [Role.SUPERADMIN]: 3,
} as const;

export const ALL_ADMINS: Role[] = [
  Role.SUPERADMIN,
  Role.ADMIN,
  Role.FRANCHISEE,
];
