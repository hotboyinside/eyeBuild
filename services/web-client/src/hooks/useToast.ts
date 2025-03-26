import { useToastStore } from "@/store/toast";
import type { Toast } from "@/store/toast";
import { useCallback } from "react";

type ToastProps = Omit<Toast, "onClose" | "id">;

export const useToast = () => {
  const addToast = useToastStore((state) => state.addToast);
  const removeToast = useToastStore((state) => state.removeToast);

  const showToast = useCallback(
    ({ severity, title, message, duration = 5000, actions }: ToastProps) => {
      const id = Date.now().toString();
      const onClose = () => removeToast(id);
      addToast({ id, severity, title, message, duration, actions, onClose });
    },
    [addToast, removeToast]
  );

  return { showToast };
};
