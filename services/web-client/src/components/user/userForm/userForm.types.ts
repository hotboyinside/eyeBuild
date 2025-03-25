import { UserFormValues } from "@/schemas";

export interface IUserForm {
  mode: "add" | "edit";
  defaultValues?: UserFormValues;
}
