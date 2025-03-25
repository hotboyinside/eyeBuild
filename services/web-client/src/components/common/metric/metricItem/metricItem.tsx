import clsx from "clsx";
import styles from "./metricItem.module.scss";
import { IMetricItem } from "./metricItem.types";
import { IconBox } from "@/components/common";
export const MetricItem = ({
  className,
  title,
  value,
  icon,
  fullWidth,
  ...props
}: IMetricItem) => {
  return (
    <div className={clsx(styles.metricItem, className, {[styles.fullWidth]: fullWidth})} {...props}>
      <IconBox className={styles.icon} size="lg" variant="outlined">
        {icon}
      </IconBox>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.value}>{value}</div>
      </div>
    </div>
  );
};
