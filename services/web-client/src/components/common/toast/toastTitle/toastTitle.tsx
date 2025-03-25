import clsx from "clsx";
import styles from "./toastTitle.module.scss";
import { IToastTitle } from "./toastTitle.types";

export const ToastTitle = ({ children, className }: IToastTitle) => {
  return <div className={clsx(styles.title, className)}>{children}</div>;
};
