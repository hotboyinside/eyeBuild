import { ButtonHTMLAttributes } from "react";

export interface ITab extends ButtonHTMLAttributes<HTMLButtonElement> {
  index: number;
}
