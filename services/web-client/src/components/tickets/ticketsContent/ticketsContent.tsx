"use client";

import { Tabs, TabList, Tab, TabPanel, Badge } from "@/components/common";
import { Status } from "@/constants/tickets/tickets.enum";
import { useTicketStore } from "@/store/ticket";
import { useEffect } from "react";
import { TicketCards } from "./ticketCards";
import { getCountTicketsForShowing } from "@/helpers/utils";

import styles from "./ticketsContent.module.scss";

export const TicketsContent = () => {
  const tabStatuses = Object.values(Status);

  const {
    search,
    tickets,
    pagination,
    setPage,
    fetchTickets,
    updateTicket,
    setStatus,
  } = useTicketStore();

  const countPendingTickets = getCountTicketsForShowing(
    pagination.totalPendingTickets
  );

  const onCloseTicketClick = (id: string, status: Status) => {
    updateTicket(id, { status: status });
    fetchTickets();
  };

  const onChangeTabClick = (index: number) => {
    setStatus(tabStatuses[index]);
  };

  useEffect(() => {
    fetchTickets();
  }, [fetchTickets]);

  return (
    <div>
      <Tabs onChange={onChangeTabClick} variant='outlined' size='md'>
        <TabList className={styles.tabListExtraMargin}>
          {tabStatuses.map((status, index) => (
            <Tab key={status} index={index}>
              {status}
              {status === Status.PENDING && countPendingTickets ? (
                <Badge
                  className={styles.counterTickets}
                  severity='info'
                  title={countPendingTickets}
                />
              ) : null}
            </Tab>
          ))}
        </TabList>
        {tabStatuses.map((status, index) => (
          <TabPanel key={status} index={index}>
            <TicketCards
              tickets={tickets}
              status={status}
              search={search}
              {...pagination}
              handleChangePage={setPage}
              onCloseTicketClick={onCloseTicketClick}
            />
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};
