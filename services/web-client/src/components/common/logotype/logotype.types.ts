import { OverridableStringUnion } from "@/types/utils";

export interface ILogotype {
  className?: string;
}

export interface ILogomark {
  className?: string;
  variant?: OverridableStringUnion<"primary" | "secondary">;
  size?: OverridableStringUnion<"sm" | "md" | "lg" | "xl" | "xxl">;
}
