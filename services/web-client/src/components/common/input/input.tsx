import React, { forwardRef } from "react";
import styles from "./input.module.scss";
import { IInput } from "./input.types";
import clsx from "clsx";

export const Input = forwardRef<HTMLInputElement, IInput>(
  (
    {
      label,
      error,
      className,
      required = false,
      position = "vertical",
      startIcon,
      endIcon,
      size = "md",
      ...other
    }: IInput,
    ref
  ) => {
    return (
      <div className={clsx(styles.wrapper, styles[position], className)}>
        {label && (
          <label className={styles.label}>
            {label}
            {required && <span className={styles.labelRequired}> *</span>}
          </label>
        )}
        <div className={styles.field}>
          <div
            className={clsx(styles.inputWrap, {
              [styles.withStartIcon]: startIcon,
              [styles.withEndIcon]: endIcon,
            })}
          >
            {startIcon && <span className={styles.startIcon}>{startIcon}</span>}
            <input
              ref={ref}
              className={clsx(styles.input, styles[size], {
                [styles.error]: error,
              })}
              {...other}
            />
            {endIcon && <span className={styles.endIcon}>{endIcon}</span>}
          </div>
          <p
            className={clsx(styles.errorText, {
              [styles.show]: error && error.trim(),
            })}
          >
            {error}
          </p>
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";
