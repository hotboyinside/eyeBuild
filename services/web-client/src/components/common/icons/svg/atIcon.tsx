import clsx from "clsx";
import { IIcon } from "../icon.types";
import styles from "../icon.module.scss";

export const AtIcon = ({
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
          d="M8.57092 8.57053C9.48047 7.66097 10.7141 7.14999 12.0004 7.14999C13.2867 7.14999 14.5203 7.66097 15.4299 8.57053C16.3394 9.48008 16.8504 10.7137 16.8504 12C16.8504 13.2863 16.3394 14.5199 15.4299 15.4295C14.5203 16.339 13.2867 16.85 12.0004 16.85C10.7141 16.85 9.48047 16.339 8.57092 15.4295C7.66137 14.5199 7.15039 13.2863 7.15039 12C7.15039 10.7137 7.66137 9.48008 8.57092 8.57053ZM12.0004 8.84999C11.165 8.84999 10.3637 9.18187 9.773 9.77261C9.18226 10.3633 8.85039 11.1646 8.85039 12C8.85039 12.8354 9.18226 13.6366 9.773 14.2274C10.3637 14.8181 11.165 15.15 12.0004 15.15C12.8358 15.15 13.637 14.8181 14.2278 14.2274C14.8185 13.6366 15.1504 12.8354 15.1504 12C15.1504 11.1646 14.8185 10.3633 14.2278 9.77261C13.637 9.18187 12.8358 8.84999 12.0004 8.84999Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.66609 2.71994C10.6577 2.00347 12.8271 1.94757 14.8529 2.56052C16.8788 3.17346 18.6533 4.42265 19.9137 6.12304C21.1738 7.82312 21.8529 9.88383 21.8504 12M21.8504 12.0011L21.8504 13.5C21.8504 14.3885 21.4974 15.2406 20.8692 15.8688C20.2409 16.497 19.3889 16.85 18.5004 16.85C17.6119 16.85 16.7598 16.497 16.1316 15.8688C15.5033 15.2406 15.1504 14.3885 15.1504 13.5L15.1504 12C15.1504 11.5306 15.5309 11.15 16.0004 11.15C16.4698 11.15 16.8504 11.5306 16.8504 12L16.8504 13.5C16.8504 13.9376 17.0242 14.3573 17.3337 14.6667C17.6431 14.9762 18.0628 15.15 18.5004 15.15C18.938 15.15 19.3577 14.9762 19.6671 14.6667C19.9766 14.3573 20.1504 13.9376 20.1504 13.5V12L20.1504 11.9989C20.1526 10.2477 19.5907 8.54225 18.5479 7.13534C17.5051 5.72842 16.0368 4.69483 14.3606 4.18767C12.6844 3.68051 10.8894 3.72676 9.24156 4.31957C7.59369 4.91239 6.18061 6.02023 5.21163 7.47898C4.24265 8.93773 3.76932 10.6698 3.86176 12.4186C3.9542 14.1674 4.60749 15.84 5.72485 17.1884C6.84221 18.5369 8.36422 19.4896 10.0654 19.9054C11.7666 20.3212 13.5564 20.1779 15.1698 19.4969C15.6023 19.3143 16.1009 19.517 16.2835 19.9494C16.466 20.3819 16.2634 20.8805 15.8309 21.0631C13.881 21.8862 11.7178 22.0593 9.66177 21.5568C7.60575 21.0543 5.76627 19.9028 4.41584 18.2731C3.06541 16.6433 2.27585 14.6219 2.16413 12.5084C2.05241 10.3948 2.62447 8.30139 3.79557 6.53836C4.96666 4.77533 6.6745 3.4364 8.66609 2.71994"
          fill="currentColor"
        />
      </svg>
    </span>
  );
};
