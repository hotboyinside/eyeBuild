import { OverridableStringUnion } from "@/types/utils";

type ParagraphTag = OverridableStringUnion<"p" | "div" | "span">;

export interface IParagraph {
  children?: React.ReactNode;
  className?: string;
  tag?: ParagraphTag;
  variant?: OverridableStringUnion<"primary" | "secondary">;
  size?: OverridableStringUnion<"sm" | "md" | "lg">;
}
