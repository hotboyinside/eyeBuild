import clsx from "clsx";
import styles from "./iconBox.module.scss";
import { IIconBox } from "./icon.types";

export const IconBox = ({
  className,
  variant = "primary",
  size = "md",
  children,
}: IIconBox) => {
  return (
    <div className={clsx(styles.box, styles[variant], styles[size], className)}>
      {children}
    </div>
  );
};
