import clsx from "clsx";
import { ICopyright } from "./copyright.types";
import styles from "./copyright.module.scss";

export const Copyright = ({ text, className }: ICopyright) => {
  const year = new Date().getFullYear();

  return (
    <div className={clsx(styles.copyright, className)}>
      {text || `© ${year} by Eye Build AZ`}
    </div>
  );
};
