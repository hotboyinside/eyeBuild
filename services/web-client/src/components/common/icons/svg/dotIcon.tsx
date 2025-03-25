import clsx from "clsx";
import { IIcon } from "../icon.types";
import styles from "../icon.module.scss";

export const DotIcon = ({
  className,
  size = "md",
  ...props
}: IIcon) => {
  return (
    <span className={clsx(styles.icon, styles[size], className)}>
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="12" cy="12" r="4" fill="currentColor" />
      </svg>
    </span>
  );
};
