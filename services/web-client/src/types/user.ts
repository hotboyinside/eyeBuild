import { Role } from "@/enums/role.enum";

export interface IUserBase {
  username: string;
  password: string;
  email: string;
  phone: string;
  fullName: string;
  companyName: string;
  companyEmail?: string;
  role: Role;
  _id: string;
}
