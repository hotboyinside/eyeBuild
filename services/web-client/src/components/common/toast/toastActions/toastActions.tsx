import clsx from "clsx";
import styles from "./toastActions.module.scss";
import { IToastActions } from "./toastActions.types";

export const ToastActions = ({ className, children }: IToastActions) => {
  return <div className={clsx(styles.actions, className)}>{children}</div>;
};
