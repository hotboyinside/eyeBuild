import clsx from "clsx";
import { IBadge } from "./badge.types";
import styles from "./badge.module.scss";
import { CloseIcon } from "../icons";
import { Avatar } from "../avatar";

export const Badge = ({
  title,
  icon,
  severity = "brand",
  size = "md",
  variant = "text",
  className,
  ...props
}: IBadge) => {
  return (
    <div
      className={clsx(styles.badge, className, styles[severity], styles[size], {
        [styles.isIcon]: variant === "icon",
      })}
      {...props}
    >
      {variant === "dot" && <span className={styles.dot}></span>}
      {variant === "avatar" && <Avatar className={styles.avatar} size="xxs" />}
      {variant === "icon" ? icon : title}
      {variant === "close" && <CloseIcon className={styles.close} size="md" />}
    </div>
  );
};