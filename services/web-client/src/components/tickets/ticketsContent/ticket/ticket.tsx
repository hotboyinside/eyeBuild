"use client";

import { Paragraph, Title, Badge, Avatar, Button } from "@/components/common";
import { ITicketBase } from "@/types/ticket";
import { formatInitials } from "@/helpers";
import { parseISO, format } from "date-fns";

import styles from "./ticket.module.scss";
import { TicketStatuses, TicketTypes } from "@/enums/tickets.enum";
import { ArchiveDownIcon, ArrowRightUpIcon } from "@/components/common";

const getBadgeSeverity = (type: TicketTypes) => {
  switch (type) {
    case TicketTypes.PAYMENT:
      return "success";
    case TicketTypes.TROUBLESHOOTING:
      return "warning";
    case TicketTypes.ACCOUNT_SUPPORT:
      return "brand";
  }
};

const getFormattedDate = (dateFromBackend: string | null | undefined) => {
  if (dateFromBackend) {
    const ticketDateISO = parseISO(dateFromBackend);
    return format(ticketDateISO, "MM/dd/yy, hh:mm a");
  }
  return null;
};

export const Ticket = ({
  ticketData,
  onOpenTicketCLick,
  onCloseTicketClick,
}: {
  ticketData: ITicketBase;
  onOpenTicketCLick: (id: string) => void;
  onCloseTicketClick: (id: string, status: TicketStatuses) => void;
}) => {
  const isPendingTicket = ticketData.status === TicketStatuses.PENDING;
  const ticketTitle = `Ticket #${ticketData._id.substring(17, 24)}`;
  const ticketFormattedCreateDate = getFormattedDate(ticketData.createdAt);
  const ticketFormattedClosedDate = getFormattedDate(ticketData?.closedDate);
  const initials = formatInitials(ticketData.fullName) || "";

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.contentTop}>
          <div className={styles.header}>
            <Title tag='h3' size='md'>
              {ticketTitle}
            </Title>
            <Badge
              severity={getBadgeSeverity(ticketData.type)}
              size='sm'
              title={ticketData.type}
            />
          </div>
          <Paragraph className={styles.description}>
            {ticketData.reason}
          </Paragraph>
          {isPendingTicket ? (
            <time className={styles.date}>{ticketFormattedCreateDate}</time>
          ) : (
            <div className={styles.time}>
              <time className={styles.date}>{ticketFormattedCreateDate}</time>
              <span className={styles.arrowIcon}>→</span>
              <time className={styles.date}>{ticketFormattedClosedDate}</time>
            </div>
          )}
        </div>
        <div className={styles.avatarContainer}>
          <Avatar variant='initials' initials={initials!} size='xs' />
          <span className={styles.username}>{ticketData.fullName}</span>
        </div>
      </div>
      <div className={styles.buttons}>
        {isPendingTicket ? (
          <Button
            variant='contained'
            color='inherit'
            noOutline
            noBackground
            type='button'
            startIcon={<ArchiveDownIcon className={styles.startIcon} />}
            className={styles.extraButton}
            onClick={() =>
              onCloseTicketClick(ticketData._id, TicketStatuses.CLOSED)
            }
          >
            Close ticket
          </Button>
        ) : (
          <Button
            color='inherit'
            type='button'
            disabled={!isPendingTicket}
            noOutline
          >
            Ticket closed
          </Button>
        )}
        <Button
          variant='outlined'
          color='inherit'
          noOutline
          noBackground
          type='button'
          startIcon={<ArrowRightUpIcon className={styles.startIcon} />}
          className={styles.extraButton}
          onClick={() => onOpenTicketCLick(ticketData._id)}
        >
          Open chat
        </Button>
      </div>
    </div>
  );
};
