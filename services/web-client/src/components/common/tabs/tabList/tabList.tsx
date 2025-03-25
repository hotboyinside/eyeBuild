import styles from "./tabList.module.scss";
import clsx from "clsx";
import { ITabList } from "./tabList.types";
import { useTabs } from "../tabsContext";

export const TabList = ({ className, children, ...other }: ITabList) => {
  const { size, variant, fullWidth, wideTabList } = useTabs();

  return (
    <div
      className={clsx(
        styles.tabList,
        className,
        styles[size],
        styles[variant],
        {
          [styles.fullWidth]: fullWidth,
          [styles.wideTabList]: wideTabList,
        }
      )}
      {...other}
    >
      {children}
    </div>
  );
};
