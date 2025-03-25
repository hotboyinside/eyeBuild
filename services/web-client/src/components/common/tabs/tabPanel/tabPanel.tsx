import styles from "./tabPanel.module.scss";
import clsx from "clsx";
import { ITabPanel } from "./tabPanel.types";
import { useTabs } from "../tabsContext";

export const TabPanel = ({ index, className, children, ...other }: ITabPanel) => {
  const { activeIndex } = useTabs();

  return activeIndex === index ? (
    <div
      className={clsx(styles.tabPanel, className)}
      role="tabpanel"
      {...other}
    >
      {children}
    </div>
  ) : null;
};
