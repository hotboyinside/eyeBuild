import { IIcon } from "@/components/common";
import { HTMLAttributes, ReactElement, ReactNode } from "react";

export interface IUserDetailsField {
  label: string;
  value: string | ReactNode;
  icon?: ReactElement<IIcon>;
}

export interface IUserDetailsCard extends HTMLAttributes<HTMLDivElement> {
  title: string;
  fields: IUserDetailsField[];
}
