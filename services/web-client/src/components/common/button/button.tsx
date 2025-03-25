import clsx from "clsx";
import { forwardRef } from "react";
import { IButton } from "./button.types";
import styles from "./button.module.scss";

export const Button = forwardRef<HTMLButtonElement, IButton>(
  (
    {
      children,
      color = "primary",
      size = "md",
      variant = "contained",
      disabled = false,
      fullWidth = false,
      onlyIcon = false,
      noOutline = false,
      loading = false,
      noBackground = false,
      noPadding = false,
      startIcon,
      endIcon,
      className,
      ...other
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={clsx(
          styles.button,
          styles[color],
          styles[size],
          styles[variant],
          {
            [styles.fullWidth]: fullWidth,
            [styles.onlyIcon]: onlyIcon,
            [styles.noOutline]: noOutline,
            [styles.noBackground]: noBackground,
            [styles.noPadding]: noPadding,
          },
          className
        )}
        disabled={disabled}
        {...other}
      >
        {loading ? (
          <span className={styles.spinner}></span>
        ) : (
          <>
            {startIcon && startIcon}
            {children}
            {endIcon && endIcon}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
