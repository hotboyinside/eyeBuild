import { Horizontal, Vertical } from "@/types/utils";

interface IOrdinate {
  vertical: Vertical;
  horizontal: Horizontal;
}

interface IOffset {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
}

export interface IPopover extends React.HTMLAttributes<HTMLElement> {
  anchorEl?: HTMLElement | null;
  open: boolean;
  onClose: () => void;
  anchorOrigin?: IOrdinate;
  transformOrigin?: IOrdinate;
  fullWidth?: boolean;
  offset?: IOffset;
}

export interface ICalculatePosition {
  anchorEl: HTMLElement;
  anchorOrigin: IOrdinate;
  transformOrigin: IOrdinate;
  popoverSize: { width: number; height: number };
  offset: IOffset;
}
