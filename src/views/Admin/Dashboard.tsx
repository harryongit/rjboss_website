import { TrendingUp, Users,User, Activity, CheckCircle, ClipboardList, CalendarCheck, UserCheck } from 'lucide-react';
import { StatCard } from '@/components/dashboard/StatCard';
import { useEffect, useState } from "react";

import { RefreshButton } from '@/components/ui/refresh-admin';
import { Toast } from "@/components/ui/ToastProvider";
import { useDashboardStats } from '@/hooks/admin/useDashboardStats';
import { Skeleton } from '@/components/ui/skeleton';

type Status = "Online" | "Degraded" | "Offline";

const randomFromArray = <T,>(arr: T[]): T =>
  arr[Math.floor(Math.random() * arr.length)];

const getRandomBackupTime = () => {
  const hours = Math.floor(Math.random() * 12) + 1;
  return `${hours} hour${hours > 1 ? "s" : ""} ago`;
};

const Dashboard = () => {
  const { data, isFetching, refetch, isLoading } = useDashboardStats();

  const [apiStatus, setApiStatus] = useState<Status>("Online");
  const [dbStatus, setDbStatus] = useState<Status>("Online");
  const [lastBackup, setLastBackup] = useState<string>("Just now");

  useEffect(() => {
    const interval = setInterval(() => {
      setApiStatus(randomFromArray(["Online", "Degraded", "Offline"]));
      setDbStatus(randomFromArray(["Online", "Offline"]));
      setLastBackup(getRandomBackupTime());
    }, 5000); // update every 5 seconds

    return () => clearInterval(interval);
  }, []);
  
  if (isLoading) {
    return (
      <div className="space-y-6">
        {/* Welcome Section Skeleton */}
        <div className="relative bg-gradient-to-r from-purple-600/30 to-purple-400/30 rounded-xl p-6 lg:p-8 animate-pulse border border-purple-500/10">
          <div className="h-8 bg-purple-500/20 rounded-md w-1/3 mb-3" />
          <div className="h-4 bg-purple-500/20 rounded-md w-2/3" />
        </div>

        {/* Stats Grid Skeleton */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="h-6 bg-muted rounded-md w-24 animate-pulse" />
            <div className="h-8 bg-muted rounded-md w-8 animate-pulse" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="bg-white dark:bg-card border border-border rounded-xl p-6 space-y-3 shadow-md">
                <div className="flex justify-between items-start">
                  <div className="h-4 bg-muted rounded-md w-28 animate-pulse" />
                  <div className="w-8 h-8 rounded-lg bg-muted animate-pulse" />
                </div>
                <div className="h-8 bg-muted rounded-md w-12 animate-pulse" />
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="bg-white dark:bg-card border border-border rounded-xl p-6 shadow-md space-y-4">
              <div className="flex justify-between items-center">
                <div className="h-6 bg-muted rounded-md w-32 animate-pulse" />
                <div className="h-8 bg-muted rounded-md w-8 animate-pulse" />
              </div>
              <div className="space-y-3">
                {Array.from({ length: 3 }).map((_, j) => (
                  <div key={j} className="flex justify-between items-center py-2">
                    <div className="h-4 bg-muted rounded-md w-32 animate-pulse" />
                    <div className="h-4 bg-muted rounded-md w-12 animate-pulse" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const stats = data?.data
    ? [
        { title: 'Total Markets', value: data.data.total_markets, icon: TrendingUp },
        { title: 'Final Ank Entries', value: data.data.final_ank_entries, icon: ClipboardList },
        { title: 'Registered Users', value: data.data.registered_users, icon: Users },
        { title: 'User–Market Assign', value: data.data.user_market_assignments, icon: UserCheck },
        { title: 'Upcoming Holidays', value: data.data.upcoming_holidays, icon: CalendarCheck },
        { title: 'Active Markets Today', value: data.data.active_markets_today, icon: Activity },
        { title: 'Completed Games', value: data.data.completed_games, icon: CheckCircle },
      ]
    : [];

  const handleRefresh = async () => {
    await refetch();
    Toast.success("Data fetched successfully!");
  };

  const statusColor = (status: Status) => {
    switch (status) {
      case "Online":
        return "text-success";
      case "Degraded":
        return "text-warning";
      case "Offline":
        return "text-destructive";
      default:
        return "text-muted-foreground";
    }
  };

  
  return (
    <div className="space-y-6">


     {/* Welcome Section */}
<div className="relative bg-gradient-to-r from-purple-600 to-purple-400 text-white rounded-xl p-6 lg:p-8 shadow-lg overflow-hidden">
  {/* Decorative circles or waves (optional) */}
  <div className="absolute top-0 -left-10 w-40 h-40 bg-purple-500 rounded-full opacity-30 pointer-events-none" />
  <div className="absolute bottom-0 -right-10 w-40 h-40 bg-purple-500 rounded-full opacity-30 pointer-events-none" />

  <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
    {/* Greeting */}
    <div>
      <h2 className="text-2xl lg:text-3xl font-bold mb-2">Welcome, Admin 👋</h2>
      <p className="text-white/90 max-w-xl">
        You are logged in to the control panel. Manage markets, users, timings, and results efficiently with real-time updates and quick access to all system tools.
      </p>
    </div>

   
  </div>
</div>


   
{/* Stats Grid */}
<div className="relative">
  <div className="flex items-center justify-between mb-2">
    <h3 className="text-lg font-semibold text-foreground">Statistics</h3>
    {/* Refresh Button */}
   <RefreshButton onClick={handleRefresh} loading={isFetching} />
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
    {stats.map((stat, index) => (
      <StatCard
        key={index}
        title={stat.title}
        value={stat.value}
        icon={stat.icon}
      />
    ))}
  </div>
</div>

{/* Quick Actions */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

  {/* Recent Activities */}
  <div className="relative bg-white dark:bg-card rounded-xl p-6 shadow-md border border-border hover:shadow-lg transition-shadow duration-300">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-semibold text-foreground">Recent Activities</h3>
      <RefreshButton onClick={handleRefresh} loading={isFetching} />
    </div>

    <div className="divide-y divide-border/50 space-y-2">
      <div className="flex items-center justify-between py-2">
        <span className="text-sm text-muted-foreground flex items-center gap-2">
          <User className="w-4 h-4 text-purple-500" />
          Recent activities
        </span>
        <span className="text-xs text-muted-foreground">{data?.data?.recent_activities ?? 0}</span>
      </div>

      <div className="flex items-center justify-between py-2">
        <span className="text-sm text-muted-foreground flex items-center gap-2">
          <ClipboardList className="w-4 h-4 text-green-500" />
          System status
        </span>
        <span className="text-xs text-muted-foreground">{data?.data?.system_status ?? 'unknown'}</span>
      </div>

      <div className="flex items-center justify-between py-2">
        <span className="text-sm text-muted-foreground flex items-center gap-2">
          <Activity className="w-4 h-4 text-blue-500" />
          Active markets today
        </span>
        <span className="text-xs text-muted-foreground">{data?.data?.active_markets_today ?? 0}</span>
      </div>
    </div>
  </div>
{/* System Status */}
<div className="relative bg-white dark:bg-card rounded-xl p-6 shadow-md border border-border hover:shadow-lg transition-shadow duration-300">
<div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-semibold text-foreground">System Status</h3>
      {/* Refresh Button */}
      <RefreshButton onClick={handleRefresh} loading={isFetching} />
    </div>
  <div className="divide-y divide-border/50 space-y-2">
      <div className="flex items-center justify-between py-2">
        <span className="text-sm text-muted-foreground">Database Status</span>
        <span className={`text-sm font-medium ${statusColor(dbStatus)}`}>
          {dbStatus}
        </span>
      </div>

      <div className="flex items-center justify-between py-2">
        <span className="text-sm text-muted-foreground">API Status</span>
        <span className={`text-sm font-medium ${statusColor(apiStatus)}`}>
          {apiStatus}
        </span>
      </div>

      <div className="flex items-center justify-between py-2">
        <span className="text-sm text-muted-foreground">Last Backup</span>
        <span className="text-sm text-muted-foreground">{lastBackup}</span>
      </div>
    </div>
</div>
</div>


    </div>
  );
};

export default Dashboard;
