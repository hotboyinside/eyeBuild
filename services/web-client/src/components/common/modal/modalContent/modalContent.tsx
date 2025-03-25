import clsx from "clsx";
import styles from "./modalContent.module.scss";
import { IModalContent } from "../modal.types";

export const ModalContent = ({ className, children }: IModalContent) => {
  return <div className={clsx(styles.modalContent, className)}>{children}</div>;
};
