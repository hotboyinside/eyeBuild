import { OverridableStringUnion } from "@/types/utils";

export interface IHeading {
  className?: string;
  underline?: boolean;
  margin?: OverridableStringUnion<"sm" | "md">;
  underlineMargin?: OverridableStringUnion<"sm" | "md">;
  gap?: OverridableStringUnion<"sm" | "md" | "lg" | "xl" | "xxl">;
  align?: OverridableStringUnion<"left" | "center" | "right">;
  children?: React.ReactNode;
}
