"use client";
import { FormEvent, useCallback, useState } from "react";
import styles from "./input.module.scss";
import { IInputPassword } from "./input.types";
import clsx from "clsx";
import { EyeHideIcon, EyeIcon } from "../icons";
import { Button } from "../button";
import { InputDetailedErrors } from "./inputDetailedErrors/inputDetailedErrors";
import { IInputDetailedErrors } from "./inputDetailedErrors";

export const InputPassword = ({
  label,
  error,
  className,
  disabled = false,
  required = false,
  position = "vertical",
  startIcon,
  showDetailedErrors,
  size = "md",
  detailedError,
  setDetailedError,
  ...props
}: IInputPassword) => {
  const { onChange, onReset } = props;
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = useCallback((event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setShowPassword((prev) => !prev);
  }, []);

  const validatePassword = (value: string): IInputDetailedErrors => {
    return {
      hasUppercase: /[A-Z]/.test(value),
      hasLowercase: /[a-z]/.test(value),
      hasNumber: /\d/.test(value),
      isMinLength: value.length >= 8,
    };
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(event);
    if (setDetailedError) {
      const value = event.target.value;
      const errors = validatePassword(value);
      setDetailedError(errors);
    }
  };

  const handlePasswordReset = (event: FormEvent<HTMLInputElement>) => {
    if (onReset) onReset(event);
    if (setDetailedError) {
      const errors = validatePassword("");
      setDetailedError(errors);
    }
  };

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
          })}
        >
          {startIcon && <span className={styles.startIcon}>{startIcon}</span>}
          <input
            type={showPassword ? "text" : "password"}
            className={clsx(styles.input, styles[size], styles.inputPassword, {
              [styles.error]: error,
            })}
            disabled={disabled}
            {...props}
            onChange={handlePasswordChange}
            onReset={handlePasswordReset}
          />
          <Button
            variant="contained"
            color="inherit"
            noOutline
            noBackground
            onlyIcon
            type="button"
            className={styles.toggleVisibility}
            disabled={disabled}
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <EyeIcon /> : <EyeHideIcon />}
          </Button>
        </div>
        <p
          className={clsx(styles.errorText, {
            [styles.show]: error && error.trim(),
          })}
        >
          {error}
        </p>
        {showDetailedErrors && <InputDetailedErrors {...detailedError} />}
      </div>
    </div>
  );
};
