import clsx from "clsx";
import styles from "./title.module.scss";
import { ITitle } from "./title.types";
import React from "react";

const ALLOWED_TAGS = ["h1", "h2", "h3", "p", "span", "div"] as const;

export const Title = ({
  children,
  tag = "div",
  size = "xl",
  weight = "semibold",
  className,
}: ITitle) => {
  const TagComponent = ALLOWED_TAGS.includes(tag) ? tag : "div";

  return (
    <TagComponent
      className={clsx(styles.title, className, styles[size], styles[weight])}
    >
      {children}
    </TagComponent>
  );
};
