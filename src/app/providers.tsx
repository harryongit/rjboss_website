"use client";

import React, { useState } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { AuthProvider } from "@/contexts/AuthContext";
import ToastProvider from "@/components/ui/ToastProvider"; // ✅ import ToastProvider

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
        staleTime: 60 * 1000, // 1 minute
        gcTime: 10 * 60 * 1000, // 10 minutes
      },
    },
  }));

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AuthProvider>
          <TooltipProvider>
            <ToastProvider />
            <React.Suspense fallback={<div className="min-h-screen flex items-center justify-center font-bold text-gray-700 bg-background">Loading...</div>}>
              {children}
            </React.Suspense>
          </TooltipProvider>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
