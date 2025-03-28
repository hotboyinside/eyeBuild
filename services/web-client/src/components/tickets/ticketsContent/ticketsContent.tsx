"use client";

import { Tabs, TabList, Tab, TabPanel, Badge } from "@/components/common";
import { TicketStatuses } from "@/enums/tickets.enum";
import { useTicketStore } from "@/store/ticket";
import { useEffect } from "react";
import { TicketCards } from "./ticketCards";
import { useRouter } from "next/navigation";

import styles from "./ticketsContent.module.scss";
import { formatCountTicketsForShowing } from "@/helpers/format.helper";
import { generateUrl } from "@/helpers";
import { Page } from "@/constants/routes";

const tabStatuses = Object.values(TicketStatuses);

export const TicketsContent = () => {
  const {
    search,
    tickets,
    pagination,
    setPage,
    fetchTickets,
    closeTicket,
    setStatus,
  } = useTicketStore();

  const router = useRouter();

  const countPendingTickets = formatCountTicketsForShowing(
    pagination.totalPendingTickets
  );

  const onCloseTicketClick = (id: string, status: TicketStatuses) => {
    closeTicket(id, { status: status });
  };

  const onOpenTicketCLick = (id: string) => {
    router.push(generateUrl(Page.TICKET, { id }));
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
              {status === TicketStatuses.PENDING && countPendingTickets ? (
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
          <TabPanel className={styles.extraPanel} key={status} index={index}>
            <TicketCards
              tickets={tickets}
              status={status}
              search={search}
              {...pagination}
              handleChangePage={setPage}
              onOpenTicketCLick={onOpenTicketCLick}
              onCloseTicketClick={onCloseTicketClick}
            />
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};
