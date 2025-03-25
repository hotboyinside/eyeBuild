import { Role } from "@/constants/roles";
import { getUsers } from "@/services/user.service";
import {
  IUserTablePagination,
  SortOrder,
  UserSortBy,
} from "@/types/pagination";
import { IUserBase } from "@/types/user";
import { create } from "zustand";

type RoleTabs = Role.ADMIN | Role.CLIENT;

interface UserStore {
  users: IUserBase[];
  pagination: IUserTablePagination;
  role: RoleTabs;
  search: string;
  fetchUsers: (role?: RoleTabs, search?: string, page?: number) => void;
  setRole: (role: RoleTabs) => void;
  setPage: (page: number) => void;
  setSearch: (search: string) => void;
}

export const useUserStore = create<UserStore>((set, get) => ({
  users: [],
  pagination: {
    total: 0,
    pages: 1,
    page: 1,
    limit: 20,
    sortBy: UserSortBy.CREATED_AT,
    order: SortOrder.DESC,
  },
  role: Role.CLIENT,
  search: "",
  fetchUsers: async (
    role = get().role,
    search = get().search,
    page = get().pagination.page
  ) => {
    try {
      const data = await getUsers({
        role,
        search,
        page,
        limit: 20,
        sortBy: UserSortBy.CREATED_AT,
        order: SortOrder.DESC,
      });
      set(data);
    } catch (error) {
      console.error("Error fetching users:", error);
      set({ users: [] });
    }
  },
  setRole: (role) =>
    set((state) => {
      const newState = {
        role,
        pagination: { ...state.pagination, page: 1 },
      };
      get().fetchUsers(role, state.search, 1);
      return newState;
    }),
  setPage: (page) =>
    set((state) => {
      const newState = {
        pagination: { ...state.pagination, page },
      };
      get().fetchUsers(state.role, state.search, page);
      return newState;
    }),
  setSearch: (search) =>
    set((state) => {
      const newState = {
        search,
        pagination: { ...state.pagination, page: 1 },
      };
      get().fetchUsers(state.role, search, 1);
      return newState;
    }),
}));
