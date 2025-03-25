import { RefObject } from "react";
import { ISelectBase } from "../select.types";

export interface ISelectInput extends ISelectBase {
  inputWrapRef?: RefObject<HTMLDivElement | null>;
  inputRef?: RefObject<HTMLInputElement | null>;
  open: boolean;
  handleOpen: () => void;
  value: string;
}
