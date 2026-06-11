"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { UserDashboardLayout } from "@/components/layout/UserDashboardLayout";

export default function UserLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Public user route
  if (pathname === "/user/login") {
    return <>{children}</>;
  }

  return (
    <ProtectedRoute role="user">
      <UserDashboardLayout>
        {children}
      </UserDashboardLayout>
    </ProtectedRoute>
  );
}
