import clsx from "clsx";
import styles from "./modalActions.module.scss";
import { IModalActions } from "../modal.types";

export const ModalActions = ({ className, children }: IModalActions) => {
  return <div className={clsx(styles.modalActions, className)}>{children}</div>;
};
