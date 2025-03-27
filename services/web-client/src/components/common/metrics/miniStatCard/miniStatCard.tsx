import clsx from "clsx";
import styles from "./miniStatCard.module.scss";
import { IMiniStatCard } from "./miniStatCard.types";
import { ArrowRightUpIcon, Button, IconBox, Paper } from "@/components/common";
import Link from "next/link";
import { Sizes } from "@/enums/size.enum";
export const MiniStatCard = ({
  className,
  title,
  value,
  icon,
  link,
  fullWidth,
  ...props
}: IMiniStatCard) => {
  return (
    <Paper
      className={clsx(styles.card, className, {
        [styles.fullWidth]: fullWidth,
      })}
      {...props}
    >
      <IconBox className={styles.icon} size={Sizes.LG} variant="outlined">
        {icon}
      </IconBox>
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.value}>{value}</div>
      </div>
      {link && (
        <Link href={link}>
          <Button
            className={styles.link}
            variant="contained"
            color="inherit"
            onlyIcon
            noOutline
            noPadding
            size={Sizes.SM}
          >
            <ArrowRightUpIcon size={Sizes.LG} />
          </Button>
        </Link>
      )}
    </Paper>
  );
};
