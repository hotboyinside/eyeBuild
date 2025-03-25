import { Role } from "@/constants/roles";

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
