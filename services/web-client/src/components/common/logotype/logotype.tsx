import Image from "next/image";
import styles from "./logotype.module.scss";
import clsx from "clsx";
import { ILogotype } from "./logotype.types";

export const Logotype = ({ className }: ILogotype) => {
  return (
    <div className={clsx(styles.logotype, className)}>
      <Image
        className={styles.image}
        src="/images/logo/logo-default.svg"
        alt="EyeBuild Logo"
        fill
        priority
      />
    </div>
  );
};
