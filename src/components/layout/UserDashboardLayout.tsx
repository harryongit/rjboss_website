import { useState } from 'react';
import { UserSidebar } from './UserSidebar';
import { TopBar } from './TopBar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const userPageTitles: Record<string, string> = {
  '/user': 'Dashboard',
  '/user/upload-result': 'Upload Result',
  '/user/free-fix': 'Free Fix',
  '/user/settings': 'Settings',
};

export const UserDashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-background">
      <UserSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="lg:ml-64 min-h-screen">
        <TopBar onMenuClick={() => setSidebarOpen(!sidebarOpen)} pageTitles={userPageTitles} />
        <main className="p-4 lg:p-6">{children}</main>
      </div>
    </div>
  );
};