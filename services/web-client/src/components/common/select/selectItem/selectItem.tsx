"use client";
import clsx from "clsx";
import styles from "./selectItem.module.scss";
import { ISelectItem } from "./selectItem.types";
import { CheckLightIcon } from "../../icons";
import { useCallback } from "react";

export const SelectItem = ({
  className,
  icon,
  selectedValue,
  value,
  onChange,
}: ISelectItem) => {
  const handleClick = useCallback(() => {
    onChange(value, icon);
  }, [onChange, icon, value]);

  const isSelected = value === selectedValue;

  return (
    <div className={clsx(styles.item, className)} onClick={handleClick}>
      {icon}
      <span className={styles.text}>{value}</span>
      {isSelected && <CheckLightIcon className={styles.endIcon} size="md" />}
    </div>
  );
};
