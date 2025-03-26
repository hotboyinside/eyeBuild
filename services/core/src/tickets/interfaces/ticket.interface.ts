import { Types } from 'mongoose';
import { Role } from 'src/common/enums/roles.enum';
import { User } from 'src/users/schemas/user.schema';
import {
  TicketStatuses,
  TicketsOrder,
  TicketsSortBy,
  TicketTypes,
} from 'src/common/enums/tickets.enum';

export interface ITicketFilter {
  role: Role;
  status: TicketStatuses;
}

export interface ITicket {
  _id: Types.ObjectId;
  userId: Types.ObjectId;
  userName: string;
  fullName: string;
  email: string;
  companyName: string;
  type: TicketTypes;
  status: TicketStatuses;
  reason: string;
  createdAt: string;
  closedDate?: string;
  paymentId?: string;
}

export interface ITicketPagination {
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
  pagination: ITicketPagination;
}

export interface ITicketsResult {
  tickets: ITicket[];
  totalCount: { count: number }[];
  totalPendingTickets: { count: number }[];
}
