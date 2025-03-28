import { Role } from "@/enums/role.enum";
import {
  getTickets,
  ITicketUpdateRequest,
  updateTicket,
} from "@/services/tickets.service";
import {
  TicketsSortBy,
  TicketsOrder,
  TicketStatuses,
} from "@/enums/tickets.enum";
import { ITicketBase, ITicketTablePagination } from "@/types/ticket";
import { create } from "zustand";

type RoleTabs = Role.ADMIN | Role.CLIENT;

interface TicketStore {
  tickets: ITicketBase[];
  pagination: ITicketTablePagination;
  search: string;
  status?: TicketStatuses;
  role?: RoleTabs;
  fetchTickets: (
    role?: RoleTabs,
    search?: string,
    status?: TicketStatuses,
    page?: number
  ) => void;
  closeTicket: (id: string, ticketData: ITicketUpdateRequest) => Promise<void>;
  setRole: (role: RoleTabs) => void;
  setPage: (page: number) => void;
  setSearch: (search: string) => void;
  setStatus: (status: TicketStatuses) => void;
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
  status: TicketStatuses.PENDING,
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
  closeTicket: async (id, ticketData) => {
    const updatedTicket = await updateTicket(id, ticketData);
    if (updatedTicket) {
      set(state => ({
        pagination: {
          ...state.pagination,
          totalPendingTickets: state.pagination.totalPendingTickets - 1,
        },
        tickets: state.tickets.map(ticket =>
          ticket._id === updatedTicket._id ? updatedTicket : ticket
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
