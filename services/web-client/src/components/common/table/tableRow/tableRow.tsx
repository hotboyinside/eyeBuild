import clsx from "clsx";
import styles from "./tableRow.module.scss";
import { ITableRow } from "./tableRow.types";

export const TableRow = ({ className, size = "md", ...other }: ITableRow) => {
  return (
    <tr className={clsx(styles.row, styles[size], className)} {...other} />
  );
};