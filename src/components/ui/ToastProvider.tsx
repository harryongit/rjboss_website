

import React from "react";
import {
  ToastContainer,
  Slide,
  ToastOptions,
  toast,
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  CheckCircle,
  AlertCircle,
  AlertTriangle,
  Loader2,
} from "lucide-react";

// Custom toast wrapper to expose Lucide icons
export const Toast = {
  success: (msg: string) =>
    toast.success(msg, {
      icon: (
        <CheckCircle
          size={20}
          strokeWidth={2}
          color={`hsl(var(--success))`}
        />
      ),
    }),

  error: (msg: string) =>
    toast.error(msg, {
      icon: (
        <AlertCircle
          size={20}
          strokeWidth={2}
          color={`hsl(var(--destructive))`}
        />
      ),
    }),

  warning: (msg: string) =>
    toast.warning(msg, {
      icon: (
        <AlertTriangle
          size={20}
          strokeWidth={2}
          color={`hsl(var(--warning))`}
        />
      ),
    }),

  loading: (msg: string) =>
    toast.info(msg, {
      icon: (
        <Loader2
          size={20}
          className="animate-spin"
          strokeWidth={2}
          color={`hsl(var(--primary))`}
        />
      ),
    }),
};

const ToastProvider = () => {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={3000}
      hideProgressBar={false}
      closeOnClick
      draggable
      pauseOnHover
      transition={Slide}
      icon={false}
      style={{ zIndex: 9999999 }}
      toastStyle={{
        background: "hsl(var(--card))",
        color: "hsl(var(--card-foreground))",
        border: "1px solid hsl(var(--border))",
        borderRadius: "8px",
        fontWeight: 500,
      }}
    />
  );
};

export default ToastProvider;
