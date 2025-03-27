import { IIcon } from "@/components/common";
import { ReactElement } from "react";

export interface IMiniStatCard extends React.BaseHTMLAttributes<HTMLDivElement> {
  icon: ReactElement<IIcon>;
  title: string;
  value: string;
  link?: string;
  fullWidth?: boolean;
}
