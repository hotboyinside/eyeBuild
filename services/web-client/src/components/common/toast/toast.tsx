"use client";
import clsx from "clsx";
import {
  CheckIcon,
  CircleIcon,
  CloseIcon,
  DangerIcon,
  DangerTriangelIcon,
  IconBox,
} from "../icons";
import styles from "./toast.module.scss";
import { IToast } from "./toast.types";
import React, { useCallback, useEffect, useState } from "react";
import { Button } from "../button";
import { Sizes } from "@/enums/size.enum";

const severityIcons = {
  success: CheckIcon,
  error: DangerIcon,
  warning: DangerTriangelIcon,
  info: CircleIcon,
};

const CLOSE_DELAY = 300;

export const Toast = ({
  children,
  severity = "info",
  icon,
  onClose,
  duration = 5000,
}: IToast) => {
  const DefaultIcon = severityIcons[severity] || CircleIcon;
  const [visible, setVisible] = useState(false);
  const [isUnmounted, setIsUnmounted] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const renderIcon = () => {
    if (React.isValidElement(icon)) {
      return icon;
    } 
    if (icon) {
      return React.createElement(icon, { className: styles.icon, size: Sizes.MD });
    }
    return <DefaultIcon className={styles.icon} size={Sizes.MD} />;
  };

  const handleClose = useCallback(() => {
    setVisible(false);
    setTimeout(() => {
      setIsUnmounted(true);
      if (onClose) {
        onClose();
      }
    }, CLOSE_DELAY);
  }, [onClose]);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, handleClose]);

  if (isUnmounted) return null;

  return (
    <div
      className={clsx(styles.toast, styles[severity], {
        [styles.visible]: visible,
      })}
    >
      <IconBox className={styles.iconBox} variant="outlined" size={Sizes.MD}>
        {renderIcon()}
      </IconBox>
      <div className={styles.toastContent}>{children}</div>
      <Button
        className={styles.closeButton}
        onClick={handleClose}
        onlyIcon
        noOutline
        noBackground
        noPadding
        size={Sizes.SM}
        color="inherit"
      >
        <CloseIcon size={Sizes.LG} />
      </Button>
    </div>
  );
};
