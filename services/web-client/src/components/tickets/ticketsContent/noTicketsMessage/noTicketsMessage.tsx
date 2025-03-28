"use client";

import { Title, Paragraph, CupIcon } from "@/components/common";
import { TicketStatuses } from "@/enums/tickets.enum";
import styles from "./noTicketsMessage.module.scss";

export const NoTicketsMessage = ({ status }: { status: TicketStatuses }) => {
  const messages = {
    [TicketStatuses.PENDING]: {
      title: "No Pending Tickets",
      paragraph: "You're all caught up!",
    },
    [TicketStatuses.CLOSED]: {
      title: "No Closed Tickets",
      paragraph: "Nothing has been resolved yet.",
    },
  };

  const { title, paragraph } = messages[status];

  return (
    <div className={styles.container}>
      <div className={styles.containerIcon}>
        <CupIcon className={styles.icon} />
      </div>
      <Title tag='h2' size='md'>
        {title}
      </Title>
      <Paragraph>{paragraph}</Paragraph>
    </div>
  );
};
