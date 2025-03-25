import { OverridableStringUnion } from "@/types/utils";

export interface IAvatarLabel {
  className?: string;
  fullname: React.ReactNode;
  username: React.ReactNode;
  size?: OverridableStringUnion<"md" | "lg">;
}
