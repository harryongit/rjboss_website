import { TrendingUp, Users,User, Activity, CheckCircle, ClipboardList, RefreshCw, CalendarCheck, UserCheck } from 'lucide-react';
import { StatCard } from '@/components/dashboard/StatCard';
import { RefreshButton } from '@/components/ui/refresh-admin';
import { Toast } from "@/components/ui/ToastProvider";
const Dashboard = () => {
  const stats = [
    { title: 'Total Markets', value: 12, icon: TrendingUp },
    { title: 'Final Ank Entries', value: 340, icon: ClipboardList },
    { title: 'Registered Users', value: 245, icon: Users },
    { title: 'User–Market Assignments', value: 128, icon: UserCheck },
    { title: 'Upcoming Holidays', value: 3, icon: CalendarCheck },
    { title: 'Active Markets Today', value: 8, icon: Activity },
    { title: 'Completed Games', value: 156, icon: CheckCircle },
  ];



  const handleRefresh = () => {
    Toast.success("Data fetched successfully!");
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
   <RefreshButton onClick={handleRefresh} loading={false} />
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
      {/* Refresh Button */}
      <RefreshButton onClick={handleRefresh} loading={false} />
    </div>

    <div className="divide-y divide-border/50 space-y-2">
  <div className="flex items-center justify-between py-2">
    <span className="text-sm text-muted-foreground flex items-center gap-2">
      <User className="w-4 h-4 text-purple-500" />
      New user registered
    </span>
    <span className="text-xs text-muted-foreground">2 hours ago</span>
  </div>

  <div className="flex items-center justify-between py-2">
    <span className="text-sm text-muted-foreground flex items-center gap-2">
      <ClipboardList className="w-4 h-4 text-green-500" />
      Market result updated
    </span>
    <span className="text-xs text-muted-foreground">5 hours ago</span>
  </div>

  <div className="flex items-center justify-between py-2">
    <span className="text-sm text-muted-foreground flex items-center gap-2">
      <Activity className="w-4 h-4 text-blue-500" />
      New market added
    </span>
    <span className="text-xs text-muted-foreground">1 day ago</span>
  </div>
</div>
  </div>
{/* System Status */}
<div className="relative bg-white dark:bg-card rounded-xl p-6 shadow-md border border-border hover:shadow-lg transition-shadow duration-300">
<div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-semibold text-foreground">System Status</h3>
      {/* Refresh Button */}
      <RefreshButton onClick={handleRefresh} loading={false} />
    </div>
  <div className="divide-y divide-border/50 space-y-2">
    <div className="flex items-center justify-between py-2">
      <span className="text-sm text-muted-foreground">Database Status</span>
      <span className="text-sm text-success font-medium">Online</span>
    </div>
    <div className="flex items-center justify-between py-2">
      <span className="text-sm text-muted-foreground">API Status</span>
      <span className="text-sm text-success font-medium">Operational</span>
    </div>
    <div className="flex items-center justify-between py-2">
      <span className="text-sm text-muted-foreground">Last Backup</span>
      <span className="text-sm text-muted-foreground">2 hours ago</span>
    </div>
  </div>
</div>
</div>


    </div>
  );
};

export default Dashboard;
