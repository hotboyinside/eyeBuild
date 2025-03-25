import clsx from "clsx";
import styles from "./tabs.module.scss";
import { ITabs } from "./tabs.types";
import React from "react";
import { TabsProvider } from "./tabsContext";

export const Tabs = ({
  value,
  onChange,
  children,
  variant = "outlined",
  size = "md",
  fullWidth = false,
  wideTabList = false,
  className,
  ...other
}: ITabs) => {
  return (
    <TabsProvider
      value={value}
      onChange={onChange}
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      wideTabList={wideTabList}
    >
      <div className={clsx(styles.tabs, styles[size], className)} {...other}>
        {children}
      </div>
    </TabsProvider>
  );
};
