import { Role } from "@/constants/roles";
import {
  getTickets,
  ITicketUpdateRequest,
  updateTicket,
} from "@/services/tickets.service";
import {
  TicketsSortBy,
  TicketsOrder,
  Status,
} from "@/constants/tickets/tickets.enum";
import { ITicketBase, ITicketTablePagination } from "@/types/ticket";
import { create } from "zustand";

type RoleTabs = Role.ADMIN | Role.CLIENT;

interface TicketStore {
  tickets: ITicketBase[];
  pagination: ITicketTablePagination;
  search: string;
  status?: Status;
  role?: RoleTabs;
  fetchTickets: (
    role?: RoleTabs,
    search?: string,
    status?: Status,
    page?: number
  ) => void;
  updateTicket: (id: string, ticketData: ITicketUpdateRequest) => Promise<void>;
  setRole: (role: RoleTabs) => void;
  setPage: (page: number) => void;
  setSearch: (search: string) => void;
  setStatus: (status: Status) => void;
}

export const useTicketStore = create<TicketStore>((set, get) => ({
  tickets: [],
  pagination: {
    total: 0,
    totalPendingTickets: 0,
    pages: 1,
    page: 1,
    limit: 20,
    sortBy: TicketsSortBy.CREATED_AT,
    order: TicketsOrder.ASC,
  },
  status: Status.PENDING,
  search: "",
  fetchTickets: async (
    role = get().role,
    search = get().search,
    status = get().status,
    page = get().pagination.page
  ) => {
    try {
      const data = await getTickets({
        status,
        role,
        search,
        page,
        limit: 20,
        sortBy: TicketsSortBy.CREATED_AT,
        order: TicketsOrder.ASC,
      });
      set(data);
    } catch (error) {
      console.error("Error fetching tickets:", error);
      set({ tickets: [] });
    }
  },
  updateTicket: async (id, ticketData) => {
    const response = await updateTicket(id, ticketData);
    if (response.ticket) {
      set(state => ({
        tickets: state.tickets.map(ticket =>
          ticket._id === response.ticket!._id ? response.ticket! : ticket
        ),
      }));
    }
  },
  setRole: role =>
    set(state => {
      const newState = {
        role,
        pagination: { ...state.pagination, page: 1 },
      };
      get().fetchTickets(role, state.search, state.status, 1);
      return newState;
    }),
  setPage: page =>
    set(state => {
      const newState = {
        pagination: { ...state.pagination, page },
      };
      get().fetchTickets(state.role, state.search, state.status, page);
      return newState;
    }),
  setSearch: search =>
    set(state => {
      const newState = {
        search,
        pagination: { ...state.pagination, page: 1 },
      };
      get().fetchTickets(state.role, search, state.status, 1);
      return newState;
    }),
  setStatus: status =>
    set(state => {
      const newState = {
        status,
        pagination: { ...state.pagination, page: 1 },
      };
      get().fetchTickets(state.role, state.search, status, 1);
      return newState;
    }),
}));
