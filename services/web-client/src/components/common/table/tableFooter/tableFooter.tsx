import clsx from "clsx";
import styles from "./tableFooter.module.scss";
import { ITableFooter } from "./tableFooter.types";

export const TableFooter = ({
  className,
  size = "md",
  ...other
}: ITableFooter) => {
  return (
    <tfoot className={clsx(styles.row, styles[size], className)} {...other} />
  );
};
