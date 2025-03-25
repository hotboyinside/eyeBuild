import clsx from "clsx";
import styles from "./avatarLabel.module.scss";
import { IAvatarLabel } from "./avatarLabel.types";

export const AvatarLabel = ({
  className,
  fullname,
  size = "md",
  username,
}: IAvatarLabel) => {
  return (
    <div className={clsx(styles.label, styles[size], className)}>
      <div className={styles.fullname}>{fullname}</div>
      <div className={styles.username}>@{username}</div>
    </div>
  );
};
