import { Role } from "@/enums/role.enum";
import { IUserBase } from "@/types/user";

export interface ITableUsersPanel {
  users: IUserBase[];
  role: Exclude<Role, Role.SUPERADMIN>;
  search: string;
  page: number;
  pages: number;
  total: number;
  handleChangePage: (page: number) => void;
}
