"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ICalculatePosition, IPopover } from "./popover.types";
import styles from "./popover.module.scss";
import clsx from "clsx";
import ReactDOM from "react-dom";

const calculatePosition = ({
  anchorEl,
  anchorOrigin,
  popoverSize,
  transformOrigin,
  offset,
}: ICalculatePosition) => {
  const anchorRect = anchorEl.getBoundingClientRect();
  let top = anchorRect.top;
  let left = anchorRect.left;

  if (anchorOrigin.vertical === "bottom") {
    top += anchorRect.height;
  } else if (anchorOrigin.vertical === "center") {
    top += anchorRect.height / 2;
  }

  if (anchorOrigin.horizontal === "right") {
    left += anchorRect.width;
  } else if (anchorOrigin.horizontal === "center") {
    left += anchorRect.width / 2;
  }

  let offsetTop = 0;
  let offsetLeft = 0;

  if (transformOrigin.vertical === "bottom") {
    offsetTop = popoverSize.height;
  } else if (transformOrigin.vertical === "center") {
    offsetTop = popoverSize.height / 2;
  }

  if (transformOrigin.horizontal === "right") {
    offsetLeft = popoverSize.width;
  } else if (transformOrigin.horizontal === "center") {
    offsetLeft = popoverSize.width / 2;
  }

  return {
    top: top - offsetTop + (offset.top || 0) - (offset.bottom || 0),
    left: left - offsetLeft + (offset.left || 0) - (offset.right || 0),
  };
};

export const Popover = ({
  anchorEl,
  open,
  onClose,
  children,
  fullWidth = false,
  anchorOrigin = { vertical: "top", horizontal: "left" },
  transformOrigin = { vertical: "top", horizontal: "left" },
  offset = {},
  className,
  ...other
}: IPopover & {
  offset?: { top?: number; left?: number; right?: number; bottom?: number };
}) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [width, setWidth] = useState<number | undefined>(undefined);
  const popoverRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!open || !anchorEl || !popoverRef.current) return;
    const popoverRect = popoverRef.current.getBoundingClientRect();
    const newPosition = calculatePosition({
      anchorEl,
      anchorOrigin,
      popoverSize: { width: popoverRect.width, height: popoverRect.height },
      transformOrigin,
      offset,
    });

    if (
      position.top !== newPosition.top ||
      position.left !== newPosition.left
    ) {
      setPosition(newPosition);
    }

    if (fullWidth) {
      setWidth(
        anchorEl.getBoundingClientRect().width - (offset.left || 0) - (offset.right || 0)
      );
    }    
  }, [
    open,
    anchorEl,
    anchorOrigin,
    transformOrigin,
    fullWidth,
    position,
    offset,
  ]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const element = popoverRef.current;
      if (element && !element.contains(event.target as Node)) {
        if (onClose) onClose();
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, onClose]);

  const handleClose = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (onClose) onClose();
  };

  return (
    open &&
    ReactDOM.createPortal(
      <div
        className={clsx(styles.overlay, { [styles.isOpen]: open })}
        onClick={handleClose}
      >
        <div
          ref={popoverRef}
          className={clsx(styles.popover, className, {
            [styles.fullWidth]: fullWidth,
          })}
          style={{
            top: position.top,
            left: position.left,
            width: fullWidth ? width : undefined,
          }}
          tabIndex={0}
          {...other}
        >
          {children}
        </div>
      </div>,
      document.body
    )
  );
};
