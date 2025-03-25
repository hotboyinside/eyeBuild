import clsx from "clsx";
import { IIcon } from "../icon.types";
import styles from "../icon.module.scss";

export const PlusIcon = ({ className, size = "md", ...props }: IIcon) => {
  return (
    <span className={clsx(styles.icon, styles[size], className)}>
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.0004 4.1499C12.4698 4.1499 12.8504 4.53046 12.8504 4.9999V11.1499H19.0004C19.4698 11.1499 19.8504 11.5305 19.8504 11.9999C19.8504 12.4693 19.4698 12.8499 19.0004 12.8499H12.8504V18.9999C12.8504 19.4693 12.4698 19.8499 12.0004 19.8499C11.5309 19.8499 11.1504 19.4693 11.1504 18.9999V12.8499H5.00039C4.53095 12.8499 4.15039 12.4693 4.15039 11.9999C4.15039 11.5305 4.53095 11.1499 5.00039 11.1499H11.1504V4.9999C11.1504 4.53046 11.5309 4.1499 12.0004 4.1499Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
};
