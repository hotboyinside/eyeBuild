import { OverridableStringUnion } from "@/types/utils";
export interface IAvatar extends React.BaseHTMLAttributes<HTMLElement> {
  size?: OverridableStringUnion<
    "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl"
  >;
  variant?: "image" | "initials";
  initials?: string;
  status?: "online" | "offline";
  imageUrl?: string;
}
