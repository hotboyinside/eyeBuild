import styles from "./ticketCard.module.scss";
import { Paper } from "../../paper";
import { ITicketCard } from "./ticketCard.types";
import clsx from "clsx";
import { Badge } from "../../badge";
import { Sizes } from "@/enums/size.enum";
import { Severity } from "@/enums/severity.enum";

export const TicketCard = ({
  _id,
  type,
  reason,
  createdAt,
  className,
  ...other
}: ITicketCard) => {
  const variant: Severity =
    type === "Account support"
      ? Severity.BRAND
      : type === "Payment"
      ? Severity.SUCCESS
      : type === "Troubleshooting"
      ? Severity.WARNING
      : Severity.INFO;
  return (
    <Paper className={clsx(styles.card, className)} {...other}>
      <header className={styles.header}>
        <div className={styles.title}>{_id}</div>
        <Badge
          title={type}
          className={styles.type}
          size={Sizes.SM}
          severity={variant}
        />
      </header>
      <div className={styles.content}>{reason}</div>
      <footer className={styles.footer}>{createdAt}</footer>
    </Paper>
  );
};
