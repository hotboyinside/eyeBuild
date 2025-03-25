import {
  Status,
  TicketsOrder,
  TicketsSortBy,
  Type,
} from "@/constants/tickets/tickets.enum";

export interface ITicketBase {
  _id: string;
  userId: string;
  userName: string;
  email: string;
  companyName: string;
  fullName: string;
  type: Type;
  status: Status;
  reason: string;
  createdAt: string;
  closedDate?: string;
  paymentId?: string;
}

export interface ITicketTablePagination {
  total: number;
  totalPendingTickets: number;
  page: number;
  pages: number;
  limit: number;
  sortBy: TicketsSortBy;
  order: TicketsOrder;
}
