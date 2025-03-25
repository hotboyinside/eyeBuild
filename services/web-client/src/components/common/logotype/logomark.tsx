import Image from "next/image";
import styles from "./logomark.module.scss";
import clsx from "clsx";
import { ILogomark } from "./logotype.types";

export const Logomark = ({
  className,
  variant = "primary",
  size = "md",
}: ILogomark) => {
  const imageUrl = `/images/logo/logomark-${variant}.svg`;
  return (
    <div className={clsx(styles.logomark, styles[size], className)}>
      <Image
        className={styles.image}
        src={imageUrl}
        alt="EyeBuild Logomark"
        fill
        priority
      />
    </div>
  );
};
