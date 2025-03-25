import { OverridableStringUnion } from "@/types/utils";
import { BaseHTMLAttributes } from "react";

export interface IAvatarCard extends BaseHTMLAttributes<HTMLElement> {
  className?: string;
  size?: OverridableStringUnion<"md" | "lg">;
}
