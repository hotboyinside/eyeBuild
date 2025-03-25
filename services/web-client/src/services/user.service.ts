import { AxiosResponse } from "axios";
import request from "./request";
import { UserFormValues } from "@/schemas";
import { IUserBase } from "@/types/user";
import { Role } from "@/constants/roles";
import {
  IUserTablePagination,
  SortOrder,
  UserSortBy,
} from "@/types/pagination";

type IUserId = string;

export const getUserById = async (userId: IUserId): Promise<IUserBase> => {
  try {
    const { data } = await request.get<IUserId, AxiosResponse<IUserBase>>(
      `/users/${userId}`
    );
    if (!data) {
      console.error("Invalid get user response:", data);
      throw new Error("Invalid get user response");
    }
    return data;
  } catch (err) {
    console.error("Get user by id error:", err);
    throw err;
  }
};

export const addUser = async (userData: UserFormValues): Promise<IUserBase> => {
  try {
    const { data } = await request.post<
      UserFormValues,
      AxiosResponse<IUserBase>
    >("/users", userData);
    if (!data) {
      console.error("Invalid add user response:", data);
      throw new Error("Invalid add user response");
    }
    return data;
  } catch (err) {
    console.error("Add user error:", err);
    throw err;
  }
};

export const updateUser = async (
  id: IUserId,
  userData: UserFormValues
): Promise<IUserBase> => {
  try {
    const { data } = await request.put<
      UserFormValues,
      AxiosResponse<IUserBase>
    >(`/users/${id}`, userData);
    if (!data) {
      console.error("Invalid update user response:", data);
      throw new Error("Invalid update user response");
    }
    return data;
  } catch (err) {
    console.error("Update user error:", err);
    throw err;
  }
};

interface IUsersRequest {
  role?: Role.CLIENT | Role.ADMIN;
  page?: number;
  limit?: number;
  search?: string;
  sortBy?: UserSortBy;
  order?: SortOrder;
}

interface IUsersResponse {
  users: IUserBase[];
  pagination?: IUserTablePagination;
}

export const getUsers = async (
  params: IUsersRequest
): Promise<IUsersResponse> => {
  try {
    const { data } = await request.get<
      IUsersRequest,
      AxiosResponse<IUsersResponse>
    >("/users/", { params });

    if (!data || !data.users) {
      console.warn("Invalid get users response:", data);
      return { users: [] };
    }
    return data;
  } catch (err) {
    console.error("Get users error:", err);
    return { users: [] };
  }
};
