import { IIcon } from "../icons";
import { HTMLAttributes } from "react";
import { OverridableStringUnion } from "@/types/utils";

export interface ISelectBase extends HTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  position?: OverridableStringUnion<"vertical" | "horizontal">;
  icon?: React.ReactElement<IIcon> | null;
}

export interface ISelect extends ISelectBase {
  value?: string;
  options: ISelectOption[];
  name?: string;
}

export interface ISelectOption {
  value: string;
  icon?: React.ReactElement<IIcon>;
}
