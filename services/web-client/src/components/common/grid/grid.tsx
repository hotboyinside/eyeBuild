import clsx from "clsx";
import styles from "./grid.module.scss";
import { IGrid } from "./grid.types";

export const Grid = ({
  container,
  size,
  spacing = 2,
  className,
  children,
}: IGrid) => {
  return (
    <div
      className={clsx(className, {
        [styles.container]: container,
        [styles[`size-${size}`]]: size,
        [styles[`spacing-${spacing}`]]: container && spacing,
      })}
    >
      {children}
    </div>
  );
};
