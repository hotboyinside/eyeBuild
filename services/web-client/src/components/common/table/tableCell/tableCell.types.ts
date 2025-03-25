import { OverridableStringUnion } from "@/types/utils";
import { TableHTMLAttributes } from "react";

export interface ITableCell extends TableHTMLAttributes<HTMLTableCellElement> {
  variant?: OverridableStringUnion<"head" | "body" | "footer">;
  component?: OverridableStringUnion<"th" | "td">;
  colSpan?: number;
}
