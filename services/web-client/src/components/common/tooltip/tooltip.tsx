import styles from "./tooltip.module.scss";
import clsx from "clsx";
import { ITooltip } from "./tooltip.types";

export const Tooltip = ({
  children,
  title,
  desc,
  className,
  placement = "top",
  variant = "light",
  noCaret = false,
  noShow = false,
}: ITooltip) => {
  const size = desc ? "lg" : "md";

  return (
    <div className={clsx(styles.tooltipWrap, className)}>
      {children}
      <div
        className={clsx(
          styles.tooltip,
          styles[placement],
          styles[size],
          styles[variant],
          { [styles.withCaret]: !noCaret, [styles.noShow]: noShow }
        )}
      >
        <div className={styles.title}>{title}</div>
        {desc && <div className={styles.desc}>{desc}</div>}
      </div>
    </div>
  );
};
