import styles from "./paper.module.scss";
import { forwardRef } from "react";
import { IPaper } from "./paper.types";
import clsx from "clsx";

export const Paper = forwardRef<HTMLDivElement, IPaper>(
  ({ variant = "primary", className, children, ...other }, ref) => {
    return (
      <div
        className={clsx(styles.paper, styles[variant], className)}
        {...other}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);

Paper.displayName = "Paper";
