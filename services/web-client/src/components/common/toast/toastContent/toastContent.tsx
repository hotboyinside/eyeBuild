import clsx from "clsx";
import styles from "./toastContent.module.scss";
import { IToastContent } from "./toastContent.types";

export const ToastContent = ({ children, className }: IToastContent) => {
  return <div className={clsx(styles.content, className)}>{children}</div>;
};
