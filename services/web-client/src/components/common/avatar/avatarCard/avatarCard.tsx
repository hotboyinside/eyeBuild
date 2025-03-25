import clsx from "clsx";
import { IAvatarCard } from "./avatarCard.types";
import styles from "./avatarCard.module.scss";

export const AvatarCard = ({
  className,
  size = "md",
  children,
  ...props
}: IAvatarCard) => {
  return (
    <div
      className={clsx(styles.avatarCard, styles[size], className)}
      {...props}
    >
      {children}
    </div>
  );
};
