

import { Menu, LogOut, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { useAuth } from "@/contexts/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";

interface TopBarProps {
  onMenuClick: () => void;
  pageTitles?: Record<string, string>;
}

const defaultPageTitles: Record<string, string> = {
  "/admin": "SM BOSS DASHBOARD",
  "/admin/add-market": "Add Market",
  "/admin/add-final-ank": "Add Final Ank",
  "/admin/user-register": "User Register",
  "/admin/add-user-market": "Add User Market",
  "/admin/market-holiday": "Market Holiday",
  "/admin/add-time": "Add Time",
  "/admin/upload-result": "Upload Result",
  "/admin/settings": "Settings",
};

export const TopBar = ({ onMenuClick, pageTitles }: TopBarProps) => {
  const { theme, toggleTheme } = useTheme();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const map = pageTitles ?? defaultPageTitles;
  const pageTitle = map[location.pathname] || "Dashboard";

  const handleLogout = async () => {
    const result = await Swal.fire({
      title: "Logout Confirmation",
      text: "Are you sure you want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      logout();
      toast.success("Logged out successfully!", { duration: 3000 });
      navigate(
        location.pathname.startsWith("/user")
          ? "/user/login"
          : "/admin/dashboard_smboss_login"
      );
    }
  };

  return (
    <header className="sticky top-0 z-30 bg-card border-b border-border shadow-sm">
      <Toaster position="bottom-right" reverseOrder={false} />
      <div className="flex items-center justify-between px-4 py-3 lg:px-6">
        {/* Left Section - Menu + Title */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onMenuClick}
            className="lg:hidden text-foreground hover:text-primary"
          >
            <Menu size={24} />
          </Button>
          <h1 className="text-xl lg:text-2xl font-bold text-foreground">
            {pageTitle}
          </h1>
        </div>

        {/* Right Section - Theme Toggle + Logout */}
        <div className="flex items-center space-x-2">
          <Button variant="secondary" size="icon" onClick={toggleTheme}>
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </Button>
          <Button variant="destructive" onClick={handleLogout}>
            <LogOut size={20} />
          </Button>
        </div>
      </div>
    </header>
  );
};
