import { HTMLAttributes } from "react";

export interface IMetricContainer extends HTMLAttributes<HTMLDivElement> {
  title: string;
  link: string;
  total?: string | number;
}
