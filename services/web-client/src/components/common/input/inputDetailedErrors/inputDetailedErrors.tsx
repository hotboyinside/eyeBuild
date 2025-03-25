import clsx from "clsx";
import styles from "./inputDetailedErrors.module.scss";
import { IInputDetailedErrors } from "./inputDetailedErrors.types";
import { CheckIcon } from "../../icons";

export const InputDetailedErrors = ({
  hasUppercase,
  hasLowercase,
  hasNumber,
  isMinLength,
}: IInputDetailedErrors) => {
  return (
    <ul className={styles.errorList}>
      <li className={styles.errorItem}>
        <CheckIcon
          className={clsx(styles.icon, { [styles.isSuccess]: hasUppercase })}
          size="lg"
          filled
        />
        One uppercase letter
      </li>
      <li className={styles.errorItem}>
        <CheckIcon
          className={clsx(styles.icon, { [styles.isSuccess]: hasLowercase })}
          size="lg"
          filled
        />
        One lowercase letter
      </li>
      <li className={styles.errorItem}>
        <CheckIcon
          className={clsx(styles.icon, { [styles.isSuccess]: hasNumber })}
          size="lg"
          filled
        />
        One number
      </li>
      <li className={styles.errorItem}>
        <CheckIcon
          className={clsx(styles.icon, { [styles.isSuccess]: isMinLength })}
          size="lg"
          filled
        />
        Min 8 characters
      </li>
    </ul>
  );
};
