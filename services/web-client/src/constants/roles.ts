export enum Role {
  SUPERADMIN = "superadmin",
  ADMIN = "admin",
  FRANCHISEE = "franchisee",
  CLIENT = "client",
}

export type IRoleUnion = keyof typeof Role;
export type IRoleValuesUnion = (typeof Role)[keyof typeof Role];

export const ROLE_VALUES = Object.values(Role);
export const REGULAR_USERS = Object.values(Role).filter(role => role !== Role.SUPERADMIN);
export const ROLE_KEYS = Object.keys(Role);