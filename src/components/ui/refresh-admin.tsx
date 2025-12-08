

import { RefreshCw } from "lucide-react";

interface RefreshButtonProps {
  onClick?: () => void;
  loading?: boolean;
  className?: string;
}

export const RefreshButton = ({
  onClick,
  loading = false,
  className = "",
}: RefreshButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={`flex items-center gap-2 text-sm text-purple-600 hover:text-purple-800 font-medium ${className} ${
        loading ? "cursor-not-allowed opacity-70" : ""
      }`}
    >
      <RefreshCw
        className={`w-4 h-4 ${loading ? "animate-spin" : ""}`}
      />
      Refresh
    </button>
  );
};
