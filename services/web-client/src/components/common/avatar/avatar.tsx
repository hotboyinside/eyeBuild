"use client";
import clsx from "clsx";
import Image from "next/image";
import { IAvatar } from "./avatar.types";
import styles from "./avatar.module.scss";
import { useEffect, useState } from "react";

export const Avatar = ({
  size = "md",
  variant = "initials",
  status,
  imageUrl = "",
  initials,
  className,
  ...props
}: IAvatar) => {
  const [renderedInitials, setRenderedInitials] = useState("");

  useEffect(() => {
    if (!initials) return;
    setRenderedInitials(initials.toUpperCase());
  }, [initials]);

  if (variant === "image" && !imageUrl) {
    variant = "initials";
  }

  return (
    <div
      className={clsx(styles.avatar, className, styles[size], styles[variant])}
      {...props}
    >
      {variant === "image" ? (
        <Image
          src={imageUrl}
          alt='Avatar'
          fill
          sizes='(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 10vw'
        />
      ) : (
        <>{renderedInitials || ""}</>
      )}
      {status && <span className={clsx(styles.status, styles[status])}></span>}
    </div>
  );
};
