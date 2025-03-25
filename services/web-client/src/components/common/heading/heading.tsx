import clsx from "clsx";
import styles from "./heading.module.scss";
import { IHeading } from "./heading.types";
import React from "react";

export const Heading = ({
  children,
  align = "left",
  gap = "md",
  margin,
  underline = false,
  underlineMargin = "md",
  className,
}: IHeading) => {
  return (
    <div
      className={clsx(
        styles.heading,
        styles[gap],
        [styles[align]],
        {
          [styles.underline]: underline,
          [styles[`margin-${margin}`]]: margin,
          [styles[`underline-${underlineMargin}`]]: underline,
        },
        className
      )}
    >
      {children}
    </div>
  );
};
