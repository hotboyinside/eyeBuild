"use client";

import { Paragraph, Title, Badge, Avatar, Button } from "@/components/common";
import { ITicketBase } from "@/types/ticket";
import { getInitials } from "@/helpers/utils";
import { parseISO, format } from "date-fns";

import styles from "./ticket.module.scss";
import { Status, Type } from "@/constants/tickets/tickets.enum";
import { DownloadIcon } from "@/components/common/icons/svg/downloadIcon";
import { LinkIcon } from "@/components/common/icons/svg/linkIcon";

const getBadgeSeverity = (type: Type) => {
  switch (type) {
    case Type.PAYMENT:
      return "success";
    case Type.TROUBLESHOOTING:
      return "warning";
    case Type.ACCOUNT_SUPPORT:
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
  onCloseTicketClick,
}: {
  ticketData: ITicketBase;
  onCloseTicketClick: (id: string, status: Status) => void;
}) => {
  const isPendingTicket = ticketData.status === Status.PENDING;
  const ticketTitle = `Ticket #${ticketData._id.substring(0, 7)}`;
  const ticketFormattedCreateDate = getFormattedDate(ticketData.createdAt);
  const ticketFormattedClosedDate = getFormattedDate(ticketData?.closedDate);
  const initials = getInitials(ticketData.fullName);

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
          <Avatar variant='initials' initials={initials} size='xs' />
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
            startIcon={<DownloadIcon />}
            className={styles.extraButton}
            onClick={() => onCloseTicketClick(ticketData._id, Status.CLOSED)}
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
          startIcon={<LinkIcon />}
          className={styles.extraButton}
        >
          Open chat
        </Button>
      </div>
    </div>
  );
};
