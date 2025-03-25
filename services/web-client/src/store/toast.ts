import { OverridableStringUnion } from "@/types/utils";
import { create } from "zustand";

export interface Toast {
  id: string;
  severity: OverridableStringUnion<"success" | "info" | "warning" | "error">;
  title: string;
  message?: string;
  duration?: number;
  actions?: React.ReactNode;
  onClose?: () => void;
}

interface ToastState {
  toasts: Toast[];
  addToast: (toast: Toast) => void;
  removeToast: (id: string) => void;
}

export const useToastStore = create<ToastState>((set) => ({
  toasts: [],
  addToast: (toast) => set((state) => ({ toasts: [toast, ...state.toasts] })),
  removeToast: (id) =>
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id),
    })),
}));
