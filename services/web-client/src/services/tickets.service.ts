import request from "./request";
import { AxiosResponse } from "axios";
import { Role } from "@/enums/role.enum";
import {
  TicketStatuses,
  TicketsOrder,
  TicketsSortBy,
  TicketTypes,
} from "@/enums/tickets.enum";
import { ITicketBase, ITicketTablePagination } from "@/types/ticket";
import { BASE_TICKETS_URL } from "@/constants/apiRoutes";

interface ITicketRequest {
  status?: TicketStatuses;
  role?: Role.CLIENT | Role.ADMIN;
  page?: number;
  limit?: number;
  search?: string;
  sortBy?: TicketsSortBy;
  order?: TicketsOrder;
}

export interface ITicketUpdateRequest {
  type?: TicketTypes;
  status?: TicketStatuses;
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
    >(BASE_TICKETS_URL, { params });
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
    >(`${BASE_TICKETS_URL}${id}`, ticketData);

    return data;
  } catch (error) {
    console.error("Update ticket error:", error);
    return { ticket: undefined };
  }
};
