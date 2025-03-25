import { IIcon } from "../../icons";

export interface ISelectItem {
  className?: string;
  value: string;
  icon?: React.ReactElement<IIcon>;
  selectedValue: string;
  onChange: (value: string, icon?: React.ReactElement<IIcon>) => void;
}
