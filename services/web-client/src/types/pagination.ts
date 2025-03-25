export enum UserSortBy {
  USERNAME = "username",
  FULL_NAME = "fullName",
  CREATED_AT = "createdAt",
}

export enum SortOrder {
  ASC = "asc",
  DESC = "desc",
}

export interface IUserTablePagination {
  total: number;
  page: number;
  pages: number;
  limit: number;
  sortBy: UserSortBy;
  order: SortOrder;
}
