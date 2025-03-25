import clsx from "clsx";
import { IIcon } from "../icon.types";
import styles from "../icon.module.scss";

export const AltArrowIcon = ({
  className,
  size = "md",
  ...props
}: IIcon) => {
  return (
    <span className={clsx(styles.icon, styles[size], className)}>
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.35504 8.44687C4.66055 8.09044 5.19715 8.04916 5.55358 8.35467L12.0004 13.8805L18.4472 8.35467C18.8037 8.04916 19.3403 8.09044 19.6458 8.44687C19.9513 8.80329 19.91 9.3399 19.5536 9.64541L12.5536 15.6454C12.2353 15.9183 11.7655 15.9183 11.4472 15.6454L4.44723 9.64541C4.09081 9.3399 4.04953 8.80329 4.35504 8.44687Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
};
