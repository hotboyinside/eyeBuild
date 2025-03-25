import clsx from "clsx";
import styles from "./paragraph.module.scss";
import { IParagraph } from "./paragraph.types";
import React from "react";

const ALLOWED_TAGS = ["p", "span", "div"] as const;

export const Paragraph = ({
  children,
  tag = "p",
  variant = "primary",
  size = "md",
  className,
}: IParagraph) => {
  const TagComponent = ALLOWED_TAGS.includes(tag) ? tag : "p";

  return (
    <TagComponent className={clsx(styles.paragraph, className, styles[variant], styles[size])}>
      {children}
    </TagComponent>
  );
};
