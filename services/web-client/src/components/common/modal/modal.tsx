"use client";
import styles from "./modal.module.scss";
import { createPortal } from "react-dom";
import { IModal } from "./modal.types";
import clsx from "clsx";
import { CloseIcon } from "../icons";
import { useCallback, useEffect, useState } from "react";
import { Button } from "../button";

export const Modal = ({ isOpen, onClose, children }: IModal) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClose = useCallback(
    (event: React.MouseEvent) => {
      event.stopPropagation();
      onClose();
    },
    [onClose]
  );

  if (!mounted) return null;

  return createPortal(
    <div
      className={clsx(styles.overlay, { [styles.isOpen]: isOpen })}
      onClick={handleClose}
    >
      <div className={clsx(styles.modal)} onClick={(e) => e.stopPropagation()}>
        <Button
          className={styles.closeButton}
          onClick={handleClose}
          onlyIcon
          noOutline
          noBackground
          noPadding
          size="sm"
          color="inherit"
        >
          <CloseIcon size="lg" />
        </Button>
        <div className={styles.content}>{children}</div>
      </div>
    </div>,
    document.body
  );
};
