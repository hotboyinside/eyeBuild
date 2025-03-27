import { OverridableStringUnion } from "@/types/utils";
import { HTMLAttributes } from "react";

export interface IAlertCard extends HTMLAttributes<HTMLDivElement> {
  type: OverridableStringUnion<"offline" | "connectivity">;
  address: string;
  timestamp: string;
}
