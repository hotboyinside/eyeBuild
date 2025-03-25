import styles from "./selectInput.module.scss";
import clsx from "clsx";
import { ISelectInput } from "./selectInput.types";
import { AltArrowIcon } from "../../icons";

export const SelectInput = ({
  label,
  error,
  className,
  required = false,
  placeholder,
  position = "vertical",
  inputWrapRef,
  inputRef,
  open,
  handleOpen,
  value,
  icon,
  ...other
}: ISelectInput) => {
  return (
    <div className={clsx(styles.wrapper, styles[position], className)}>
      {label && (
        <label className={styles.label}>
          {label}
          {required && <span className={styles.labelRequired}> *</span>}
        </label>
      )}
      <div className={styles.field}>
        <div
          className={clsx(styles.inputWrap, styles.withEndIcon, {
            [styles.isOpen]: open,
            [styles.withStartIcon]: icon,
          })}
          ref={inputWrapRef}
        >
          {icon ? <span className={styles.startIcon}>{icon}</span> : null}
          <input
            className={clsx(styles.input, {
              [styles.error]: error,
            })}
            value={value}
            placeholder={placeholder}
            readOnly
            onClick={handleOpen}
            ref={inputRef}
            {...other}
          />
          <AltArrowIcon className={styles.endIcon} size="md" />
        </div>
        <p
          className={clsx(styles.errorText, {
            [styles.show]: error && error.trim(),
          })}
        >
          {error}
        </p>
      </div>
    </div>
  );
};
