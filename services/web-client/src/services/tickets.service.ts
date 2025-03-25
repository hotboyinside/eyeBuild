import request from "./request";
import { AxiosResponse } from "axios";
import { Role } from "@/constants/roles";
import {
  Status,
  TicketsOrder,
  TicketsSortBy,
  Type,
} from "@/constants/tickets/tickets.enum";
import { ITicketBase, ITicketTablePagination } from "@/types/ticket";

interface ITicketRequest {
  status?: Status;
  role?: Role.CLIENT | Role.ADMIN;
  page?: number;
  limit?: number;
  search?: string;
  sortBy?: TicketsSortBy;
  order?: TicketsOrder;
}

export interface ITicketUpdateRequest {
  type?: Type;
  status?: Status;
  reason?: string;
}

interface ITicketsResponse {
  tickets: ITicketBase[];
  pagination?: ITicketTablePagination;
}

interface ITicketsUpdateResponse {
  ticket?: ITicketBase;
}

export const getTickets = async (
  params: ITicketRequest
): Promise<ITicketsResponse> => {
  try {
    const { data } = await request.get<
      ITicketRequest,
      AxiosResponse<ITicketsResponse>
    >("/tickets/", { params });

    if (!data || !data.tickets) {
      console.warn("Invalid get tickets response:", data);
      return { tickets: [] };
    }
    return data;
  } catch (error) {
    console.error("Get tickets error:", error);
    return { tickets: [] };
  }
};

export const updateTicket = async (
  id: string,
  ticketData?: ITicketUpdateRequest
): Promise<ITicketsUpdateResponse> => {
  try {
    const { data } = await request.put<
      ITicketRequest,
      AxiosResponse<ITicketsUpdateResponse>
    >(`/tickets/${id}`, ticketData);

    if (!data || !data.ticket) {
      console.warn("Invalid update ticket response:", data);
      return { ticket: undefined };
    }
    return data;
  } catch (error) {
    console.error("Update ticket error:", error);
    return { ticket: undefined };
  }
};
