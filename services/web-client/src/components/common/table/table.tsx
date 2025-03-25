import clsx from "clsx";
import styles from "./table.module.scss";
import { ITable } from "./table.types";

export const Table = ({ className, size = "md", ...other }: ITable) => {
  return (
    <table className={clsx(styles.table, styles[size], className)} {...other} />
  );
};
