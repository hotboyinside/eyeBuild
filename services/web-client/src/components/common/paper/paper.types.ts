import { OverridableStringUnion } from "@/types/utils";
import { HTMLAttributes } from "react";

export interface IPaper extends HTMLAttributes<HTMLDivElement> {
  variant?: OverridableStringUnion<"primary" | "secondary">;
}
