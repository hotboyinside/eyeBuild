import { OverridableStringUnion } from "@/types/utils";
import { IIcon } from "../icons";
import { IInputDetailedErrors } from "./inputDetailedErrors";

export interface IInput
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
  size?: OverridableStringUnion<"sm" | "md">;
  type?: OverridableStringUnion<"text" | "email" | "password" | "tel">;
  position?: OverridableStringUnion<"vertical" | "horizontal">;
  startIcon?: React.ReactElement<IIcon>;
  endIcon?: React.ReactElement<IIcon>;
}

export interface IInputPassword extends IInput {
  showDetailedErrors?: boolean;
  detailedError?: IInputDetailedErrors;
  setDetailedError?: (errors: IInputDetailedErrors) => void;
}
