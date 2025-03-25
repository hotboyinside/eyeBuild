import clsx from "clsx";
import { ICheckbox } from "./checkbox.types";
import styles from "./checkbox.module.scss";

export const Checkbox = ({
    variant = "primary",
    size = "md",
    className,
    title,
    description,
    ...props
}: ICheckbox) => {
    return (
        <label
            className={clsx(
                styles.checkboxWrapper,
                styles[variant],
                styles[size],
                className,
            )}
        >
            <input
                type="checkbox"
                className={clsx(styles.checkbox)}
                {...props}
            />
            <span className={clsx(styles.customCheckbox)} />
            {(title || description) && (
                <span className={styles.textWrapper}>
                    {title && <span className={styles.title}>{title}</span>}
                    {description && (
                        <span className={styles.description}>
                            {description}
                        </span>
                    )}
                </span>
            )}
        </label>
    );
};
