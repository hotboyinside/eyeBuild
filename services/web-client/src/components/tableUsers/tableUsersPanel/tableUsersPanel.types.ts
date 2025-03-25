import { IUserBase } from "@/types/user";

export interface ITableUsersPanel {
  users: IUserBase[];
  role: "clients" | "admins";
  search: string;
  page: number;
  pages: number;
  total: number;
  handleChangePage: (page: number) => void;
}
