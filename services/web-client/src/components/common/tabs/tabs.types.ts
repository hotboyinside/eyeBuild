import { OverridableStringUnion } from "@/types/utils";
import { ReactNode } from "react";

export interface ITabs {
  className?: string;
  value?: number;
  size?: OverridableStringUnion<"md" | "lg">;
  variant?: OverridableStringUnion<"underline" | "outlined">;
  fullWidth?: boolean;
  wideTabList?: boolean;
  children?: React.ReactNode;
  onChange?: (index: number) => void;
}

export  interface ITabsContext {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  size: OverridableStringUnion<"md" | "lg">;
  variant: OverridableStringUnion<"underline" | "outlined">;
  fullWidth: boolean;
  wideTabList: boolean;
}

export interface ITabsProvider {
  value?: number;
  size: OverridableStringUnion<"md" | "lg">;
  variant: OverridableStringUnion<"underline" | "outlined">;
  fullWidth: boolean;
  wideTabList: boolean;
  children: ReactNode;
  onChange?: (index: number) => void;
}
