import clsx from "clsx";
import styles from "./tableHead.module.scss";
import { ITableHead } from "./tableHead.types";

export const TableHead = ({ className, size = "md", ...other }: ITableHead) => {
  return (
    <thead className={clsx(styles.head, styles[size], className)} {...other} />
  );
};