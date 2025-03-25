import clsx from "clsx";
import styles from "./tableBody.module.scss";
import { ITableBody } from "./tableBody.types";

export const TableBody = ({ className, size = "md", ...other }: ITableBody) => {
  return (
    <tbody
      className={clsx(styles.body, styles[size], className)}
      {...other}
    />
  );
};