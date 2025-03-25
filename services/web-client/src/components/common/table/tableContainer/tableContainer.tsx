import clsx from "clsx";
import styles from "./tableContainer.module.scss";
import { ITableContainer } from "./tableContainer.types";

export const TableContainer = ({
  className,
  size = "md",
  ...other
}: ITableContainer) => {
  return (
    <div
      className={clsx(styles.container, styles[size], className)}
      {...other}
    />
  );
};