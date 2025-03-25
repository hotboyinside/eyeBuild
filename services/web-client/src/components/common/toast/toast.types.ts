import { OverridableStringUnion } from "@/types/utils";
import { ElementType, HTMLAttributes, ReactElement } from "react";

export interface IToast extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  severity: OverridableStringUnion<"success" | "info" | "warning" | "error">;
  icon?: ReactElement | ElementType;
  onClose?: () => void;
  duration?: number;
}
