"use client";

import {
  Title,
  Paragraph,
  CupIcon,
  TablePagination,
} from "@/components/common";
import { Status } from "@/constants/tickets/tickets.enum";
import { ITicketBase } from "@/types/ticket";
import { Ticket } from "../ticket/ticket";

import clsx from "clsx";
import styles from "./ticketCards.module.scss";

interface TicketCardsProps {
  tickets: ITicketBase[];
  status: Status;
  pages: number;
  page: number;
  total: number;
  search?: string;
  handleChangePage: (page: number) => void;
  onCloseTicketClick: (id: string, status: Status) => void;
}

export const TicketCards = ({
  tickets,
  status,
  pages,
  page,
  handleChangePage,
  onCloseTicketClick,
}: TicketCardsProps) => {
  const filteredTickets = tickets.filter(ticket => ticket.status === status);
  const isEmptyTickets = filteredTickets.length === 0;

  let content;
  if (isEmptyTickets && status == Status.PENDING) {
    content = (
      <div className={styles.container}>
        <div className={styles.containerIcon}>
          <CupIcon className={styles.icon} />
        </div>
        <Title tag='h2' size='md'>
          No Pending Tickets
        </Title>
        <Paragraph>You&apos;re all caught up!</Paragraph>
      </div>
    );
  } else if (isEmptyTickets && status == Status.CLOSED) {
    content = (
      <div className={styles.container}>
        <div className={styles.containerIcon}>
          <CupIcon className={styles.icon} />
        </div>
        <Title tag='h2' size='md'>
          No Closed Tickets
        </Title>
        <Paragraph>Nothing has been resolved yet.</Paragraph>
      </div>
    );
  } else {
    content = (
      <>
        <div className={styles.cardsContainer}>
          {filteredTickets.map(ticket => (
            <Ticket
              key={ticket._id}
              ticketData={ticket}
              onCloseTicketClick={onCloseTicketClick}
            />
          ))}
        </div>
        {pages > 1 && (
          <TablePagination
            currentPage={page}
            totalPages={pages}
            handleChangePage={handleChangePage}
          />
        )}
      </>
    );
  }

  return (
    <div
      className={clsx({
        [styles.rootWithCards]: !isEmptyTickets,
        [styles.rootWithoutCards]: isEmptyTickets,
      })}
    >
      {content}
    </div>
  );
};
