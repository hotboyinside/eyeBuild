export enum Role {
  SUPERADMIN = 'superadmin',
  FRANCHISEE = 'franchisee',
  ADMIN = 'admin',
  CLIENT = 'client',
}

export enum RoleHierarchy {
  CLIENT,
  ADMIN,
  FRANCHISEE,
  SUPERADMIN,
}

export const ALL_ADMINS: Role[] = [
  Role.SUPERADMIN,
  Role.ADMIN,
  Role.FRANCHISEE,
];
