import { OverridableStringUnion } from "@/types/utils";

export interface IBadge extends React.BaseHTMLAttributes<HTMLElement> {
  title?: string;
  className?: string;
  severity?: OverridableStringUnion<
    "success" | "info" | "warning" | "error" | "brand"
  >;
  size?: OverridableStringUnion<"sm" | "md" | "lg">;
  variant?: OverridableStringUnion<
    "text" | "dot" | "avatar" | "close" | "icon"
  >;
  icon?: React.ReactNode;
}
