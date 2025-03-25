import { IIcon } from "@/components/common";
import { ReactElement } from "react";

export interface IMetricItem extends React.BaseHTMLAttributes<HTMLDivElement> {
  icon: ReactElement<IIcon>;
  title: string;
  value: string;
  fullWidth?: boolean;
}
