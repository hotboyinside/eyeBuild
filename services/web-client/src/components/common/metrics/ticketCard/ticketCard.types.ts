import { OverridableStringUnion } from "@/types/utils";
import { HTMLAttributes } from "react";

export interface ITicketCard extends HTMLAttributes<HTMLDivElement> {
  _id: string;
  type: OverridableStringUnion<
    "Troubleshooting" | "Account support" | "Payment"
  >;
  reason: string;
  createdAt: string;
}
