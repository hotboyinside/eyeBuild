import {
  OverridableStringUnion,
  BaseOrdinate,
  BasePositions,
} from "@/types/utils";

type TooltipPlacement = OverridableStringUnion<
  `${BaseOrdinate}-${BasePositions}` | BaseOrdinate
>;

export interface ITooltip {
  children: React.ReactNode;
  title: string;
  desc?: string;
  className?: string;
  placement?: TooltipPlacement;
  variant?: OverridableStringUnion<"dark" | "light">;
  noCaret?: boolean;
  noShow?: boolean;
}
