import clsx from "clsx";
import { IIcon } from "../icon.types";
import styles from "../icon.module.scss";

export const CircleIcon = ({
    className,
    filled = false,
    size = "md",
    ...props
}: IIcon) => {
    return (
        <span className={clsx(styles.icon, styles[size], className)}>
            <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                {filled ? (
                    <path
                        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                        fill="currentColor"
                    />
                ) : (
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.0004 2.85002C6.94699 2.85002 2.85039 6.94662 2.85039 12C2.85039 17.0534 6.94699 21.15 12.0004 21.15C17.0538 21.15 21.1504 17.0534 21.1504 12C21.1504 6.94662 17.0538 2.85002 12.0004 2.85002ZM1.15039 12C1.15039 6.00774 6.0081 1.15002 12.0004 1.15002C17.9927 1.15002 22.8504 6.00774 22.8504 12C22.8504 17.9923 17.9927 22.85 12.0004 22.85C6.0081 22.85 1.15039 17.9923 1.15039 12Z"
                        fill="currentColor"
                    />
                )}
            </svg>
        </span>
    );
};
