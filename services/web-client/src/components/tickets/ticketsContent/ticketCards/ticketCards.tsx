"use client";

import { TablePagination } from "@/components/common";
import { TicketStatuses } from "@/enums/tickets.enum";
import { ITicketBase } from "@/types/ticket";
import { Ticket } from "../ticket/ticket";

import clsx from "clsx";
import styles from "./ticketCards.module.scss";
import { useMemo } from "react";
import { NoTicketsMessage } from "../noTicketsMessage/noTicketsMessage";

interface ITicketCardsProps {
  tickets: ITicketBase[];
  status: TicketStatuses;
  pages: number;
  page: number;
  total: number;
  search?: string;
  handleChangePage: (page: number) => void;
  onOpenTicketCLick: (id: string) => void;
  onCloseTicketClick: (id: string, status: TicketStatuses) => void;
}

export const TicketCards = ({
  tickets,
  status,
  pages,
  page,
  handleChangePage,
  onOpenTicketCLick,
  onCloseTicketClick,
}: ITicketCardsProps) => {
  const filteredTickets = useMemo(
    () => tickets.filter(ticket => ticket.status === status),
    [tickets, status]
  );

  const isEmptyTickets = filteredTickets.length === 0;

  let content;
  if (isEmptyTickets) {
    content = <NoTicketsMessage status={status} />;
  } else {
    content = (
      <>
        <div className={styles.cardsContainer}>
          {filteredTickets.map(ticket => (
            <Ticket
              key={ticket._id}
              ticketData={ticket}
              onOpenTicketCLick={onOpenTicketCLick}
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
