import styles from "./tab.module.scss";
import { ITab } from "./tab.types";
import clsx from "clsx";
import { useTabs } from "../tabsContext";

export const Tab = ({ index, children, className }: ITab) => {
  const { activeIndex, setActiveIndex, variant, size, fullWidth } = useTabs();
  const handleClick = () => setActiveIndex(index);
  return (
    <button
      className={clsx(styles.tab, className, styles[size], styles[variant], {
        [styles.fullWidth]: fullWidth,
        [styles.active]: activeIndex === index,
      })}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
