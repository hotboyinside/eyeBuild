import { create } from "zustand";
import { persist } from "zustand/middleware";
import { IUserBase } from "@/types/user";

interface CurrentUserState {
  user: IUserBase | null;
  setUser: (user: IUserBase) => void;
  removeUser: () => void;
}

export const useCurrentUser = create<CurrentUserState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      removeUser: () => set({ user: null }),
    }),
    {
      name: "current-user",
    }
  )
);