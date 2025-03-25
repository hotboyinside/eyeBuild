"use client";
import { useToastStore } from "@/store/toast";
import { Toast } from "../toast";
import styles from "./toastContainer.module.scss";
import { ToastContent } from "../toastContent";
import { ToastTitle } from "../toastTitle";
import { ToastActions } from "../toastActions";

const MAX_TOASTS_DISPLAYED = 3;

export const ToastContainer = () => {
  const toasts = useToastStore((state) => state.toasts);
  const lastThreeToasts = toasts.slice(0, MAX_TOASTS_DISPLAYED);

  return (
    <div className={styles.container}>
      {lastThreeToasts.map((toast) => (
        <Toast
          key={toast.id}
          severity={toast.severity}
          duration={toast.duration}
          onClose={toast.onClose}
        >
          <ToastContent>
            {toast.title && <ToastTitle>{toast.title}</ToastTitle>}
            {toast.message}
          </ToastContent>
          {toast.actions && <ToastActions>{toast.actions}</ToastActions>}
        </Toast>
      ))}
    </div>
  );
};
