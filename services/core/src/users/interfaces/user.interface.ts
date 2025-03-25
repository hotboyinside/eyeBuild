import { Types } from 'mongoose';
import { Role } from 'src/common/enums/roles.enum';

export interface IUser {
  _id: Types.ObjectId;
  username: string;
  email: string;
  password: string;
  companyEmail: string;
  phone: string;
  fullName?: string;
  companyName?: string;
  isBanned?: boolean;
  role: Role;
}

export enum SortOrder {
  ASC = 'asc',
  DESC = 'desc',
}

export enum UserSortBy {
  CREATED_AT = 'createdAt',
  USERNAME = 'username',
  EMAIL = 'fullName',
  ROLE = 'role',
}

export interface IPagination {
  total: number;
  pages: number;
  page: number;
  limit: number;
  sortBy: UserSortBy;
  order: SortOrder;
}

export interface IAggregationResult {
  users: IUser[];
  totalCount: { count: number }[];
}

export interface IFindAllUsersResponse {
  users: IUser[];
  pagination: IPagination;
}
