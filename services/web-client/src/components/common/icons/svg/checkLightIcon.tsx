import clsx from "clsx";
import { IIcon } from "../icon.types";
import styles from "../icon.module.scss";

export const CheckLightIcon = ({ className, size = "md", ...props }: IIcon) => {
  return (
    <span className={clsx(styles.icon, styles[size], className)}>
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.6014 6.39898C20.9334 6.73093 20.9334 7.26912 20.6014 7.60107L9.60143 18.6011C9.26949 18.933 8.7313 18.933 8.39935 18.6011L3.39935 13.6011C3.0674 13.2691 3.0674 12.7309 3.39935 12.399C3.7313 12.067 4.26949 12.067 4.60143 12.399L9.00039 16.7979L19.3993 6.39898C19.7313 6.06704 20.2695 6.06704 20.6014 6.39898Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
};
