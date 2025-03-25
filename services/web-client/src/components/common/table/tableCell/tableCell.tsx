import clsx from "clsx";
import styles from "./tableCell.module.scss";
import { ITableCell } from "./tableCell.types";

export const TableCell = ({
  component = "td",
  align = "left",
  className,
  variant = "body",
  ...other
}: ITableCell) => {
  const Tag = component;
  return (
    <Tag
      className={clsx(styles.cell, styles[variant], styles[align], className)}
      {...other}
    />
  );
};
