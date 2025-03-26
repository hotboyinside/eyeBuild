"use client";

import {
  Title,
  Paragraph,
  CupIcon,
  TablePagination,
} from "@/components/common";
import { TicketStatuses } from "@/enums/tickets.enum";
import { ITicketBase } from "@/types/ticket";
import { Ticket } from "../ticket/ticket";

import clsx from "clsx";
import styles from "./ticketCards.module.scss";
import { useMemo } from "react";

interface ITicketCardsProps {
  tickets: ITicketBase[];
  status: TicketStatuses;
  pages: number;
  page: number;
  total: number;
  search?: string;
  handleChangePage: (page: number) => void;
  onCloseTicketClick: (id: string, status: TicketStatuses) => void;
}

export const TicketCards = ({
  tickets,
  status,
  pages,
  page,
  handleChangePage,
  onCloseTicketClick,
}: ITicketCardsProps) => {
  const filteredTickets = useMemo(
    () => tickets.filter(ticket => ticket.status === status),
    [tickets, status]
  );

  const isEmptyTickets = filteredTickets.length === 0;

  const renderNoTicketsMessage = (status: TicketStatuses) => {
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

  let content;
  if (isEmptyTickets) {
    content = renderNoTicketsMessage(status);
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
        [styles.rootWithoutCards]: isEmptyTickets,
      })}
    >
      {content}
    </div>
  );
};
