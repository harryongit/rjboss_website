// ConfirmSwal.ts
import Swal from "sweetalert2";

interface ConfirmSwalOptions {
  title: string;
  text?: string;
  confirmText?: string;
  cancelText?: string;
  icon?: "warning" | "info" | "question" | "error" | "success";
}

export const confirmSwal = async ({
  title,
  text = "",
  confirmText = "Yes",
  cancelText = "Cancel",
  icon = "warning",
}: ConfirmSwalOptions) => {
  const result = await Swal.fire({
    title,
    text,
    icon,
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: confirmText,
    cancelButtonText: cancelText,
  });

  return result.isConfirmed;
};
