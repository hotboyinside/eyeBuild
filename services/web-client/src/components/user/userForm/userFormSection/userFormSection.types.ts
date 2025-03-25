import { HTMLAttributes } from "react";

export interface IUserFormSection extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
}
