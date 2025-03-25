import { OverridableStringUnion } from "@/types/utils";

type TitleTag = OverridableStringUnion<
  "h1" | "h2" | "h3" | "p" | "span" | "div"
>;

export interface ITitle {
  children?: React.ReactNode;
  className?: string;
  tag?: TitleTag;
  size?: OverridableStringUnion<"md" | "lg" | "xl">;
  weight?: OverridableStringUnion<"normal" | "medium" | "semibold" | "bold">;
}
