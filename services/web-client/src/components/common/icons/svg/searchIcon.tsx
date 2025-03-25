import clsx from "clsx";
import { IIcon } from "../icon.types";
import styles from "../icon.module.scss";

export const SearchIcon = ({ className, size = "md", ...props }: IIcon) => {
  return (
    <span className={clsx(styles.icon, styles[size], className)}>
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.5004 2.8499C6.72313 2.8499 2.85039 6.72264 2.85039 11.4999C2.85039 16.2772 6.72313 20.1499 11.5004 20.1499C16.2777 20.1499 20.1504 16.2772 20.1504 11.4999C20.1504 6.72264 16.2777 2.8499 11.5004 2.8499ZM1.15039 11.4999C1.15039 5.78376 5.78424 1.1499 11.5004 1.1499C17.2165 1.1499 21.8504 5.78376 21.8504 11.4999C21.8504 17.216 17.2165 21.8499 11.5004 21.8499C5.78424 21.8499 1.15039 17.216 1.15039 11.4999Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.8993 17.8989C18.2313 17.5669 18.7695 17.5669 19.1014 17.8989L22.6014 21.3989C22.9334 21.7308 22.9334 22.269 22.6014 22.6009C22.2695 22.9329 21.7313 22.9329 21.3993 22.6009L17.8993 19.1009C17.5674 18.769 17.5674 18.2308 17.8993 17.8989Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
};
