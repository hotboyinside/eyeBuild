import { Types } from 'mongoose';
import { Role } from 'src/common/enums/roles.enum';
import {
  Status,
  TicketsOrder,
  TicketsSortBy,
  Type,
} from 'src/common/enums/tickets.enum';

export interface IFilter {
  role: Role;
  status: Status;
}

export interface ITicket {
  _id: Types.ObjectId;
  userId: Types.ObjectId;
  userName: string;
  fullName: string;
  email: string;
  companyName: string;
  type: Type;
  status: Status;
  reason: string;
  createdAt: string;
  closedDate?: string;
  paymentId?: string;
}

export interface IPagination {
  total: number;
  totalPendingTickets: number;
  pages: number;
  page: number;
  limit: number;
  sortBy: TicketsSortBy;
  order: TicketsOrder;
}

export interface IAllTicketsResponse {
  tickets: ITicket[];
  pagination: IPagination;
}

export interface ITicketsAfterAggregation {
  tickets: ITicket[];
  totalCount: { count: number }[];
  totalPendingTickets: { count: number }[];
}
