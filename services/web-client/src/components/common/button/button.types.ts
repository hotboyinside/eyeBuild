import { OverridableStringUnion } from "@/types/utils";

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  color?: OverridableStringUnion<
    "inherit" | "neutral" | "primary" | "secondary"
  >;
  size?: OverridableStringUnion<"xs" | "sm" | "md" | "lg" | "xl" | "xxl">;
  variant?: OverridableStringUnion<"text" | "outlined" | "contained">;
  disabled?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
  onlyIcon?: boolean;
  noOutline?: boolean;
  noBackground?: boolean;
  noPadding?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}
