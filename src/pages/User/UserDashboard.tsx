

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, CheckCircle, XCircle } from "lucide-react";
import { motion } from "framer-motion";

const UserDashboard = () => {
  const userName = "John Doe";

  const markets = [
    {
      name: "BANGALORE DAY",
      startDate: "05-12-2025",
      expiryDate: "04-01-2026",
      remainingDays: 29,
      totalDays: 60,
      status: "Inactive",
    },
    {
      name: "BANGALORE NIGHT",
      startDate: "05-12-2025",
      expiryDate: "04-01-2026",
      remainingDays: 29,
      totalDays: 60,
      status: "Active",
    },
    {
      name: "MUMBAI DAY",
      startDate: "06-12-2025",
      expiryDate: "05-01-2026",
      remainingDays: 30,
      totalDays: 60,
      status: "Active",
    },
    {
      name: "MUMBAI NIGHT",
      startDate: "06-12-2025",
      expiryDate: "05-01-2026",
      remainingDays: 30,
      totalDays: 60,
      status: "Inactive",
    },
    {
      name: "DELHI DAY",
      startDate: "07-12-2025",
      expiryDate: "06-01-2026",
      remainingDays: 31,
      totalDays: 60,
      status: "Active",
    },
    {
      name: "DELHI NIGHT",
      startDate: "07-12-2025",
      expiryDate: "06-01-2026",
      remainingDays: 31,
      totalDays: 60,
      status: "Inactive",
    },
    {
      name: "CHENNAI DAY",
      startDate: "08-12-2025",
      expiryDate: "07-01-2026",
      remainingDays: 32,
      totalDays: 60,
      status: "Active",
    },
    {
      name: "CHENNAI NIGHT",
      startDate: "08-12-2025",
      expiryDate: "07-01-2026",
      remainingDays: 32,
      totalDays: 60,
      status: "Inactive",
    },
  ];
  

  const getCardBgClass = (status: string) =>
    status === "Active"
      ? "bg-green-50 dark:bg-green-900"
      : "bg-gray-100 dark:bg-gray-800";

      
        const getStatusStyles = (status: string) =>
          status === "Active"
            ? "text-green-600 dark:text-green-400"
            : "text-red-600 dark:text-red-400";
      
  return (
    <div className="space-y-6">

      {/* Account Alert */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 p-4 rounded-lg bg-red-50 dark:bg-red-900 border border-red-300 dark:border-red-700 shadow-sm">
        <div className="flex items-center gap-3">
          <AlertTriangle className="text-red-600 dark:text-red-400 w-6 h-6" />
          <p className="text-red-700 dark:text-red-300 font-semibold">
            Your account is active till: <span className="underline">04-01-2026</span>
          </p>
        </div>
        <p className="text-red-700 dark:text-red-300 font-medium">
          Remaining Days: <span className="font-bold">29 days</span>
        </p>
      </div>

      {/* Welcome Message */}
      <Card className="relative bg-gradient-to-r from-purple-600 to-purple-400 dark:from-purple-800 dark:to-purple-600 text-white rounded-xl p-6 lg:p-8 shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="absolute top-0 -left-10 w-40 h-40 bg-purple-500 dark:bg-purple-700 rounded-full opacity-30 pointer-events-none" />
        <div className="absolute bottom-0 -right-10 w-40 h-40 bg-purple-500 dark:bg-purple-700 rounded-full opacity-30 pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold mb-2">Welcome, {userName} 👋</h2>
            <p className="text-white/90 dark:text-white/80 max-w-xl">
            Upload market results quickly and manage them efficiently through this panel.
            </p>

          </div>
        </div>
      </Card>

      {/* Market Details */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  {markets.map((market, index) => {
    const progress = (market.remainingDays / market.totalDays) * 100;
    const isActive = market.status === "Active";

    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 25, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.div
          whileHover={{
            scale: 1.05,
            rotateX: 3,
            rotateY: -3,
            transition: { duration: 0.25 },
          }}
          className="relative cursor-pointer"
        >
          <Card
            className={`border border-gray-200 dark:border-gray-700 rounded-xl shadow-md transition-shadow duration-300 hover:shadow-xl ${getCardBgClass(market.status)}`}
          >
            {/* Card Header */}
            <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold">{market.name}</h3>
              <div className="flex items-center gap-1">
                {isActive ? (
                  <CheckCircle size={16} className={getStatusStyles(market.status)} />
                ) : (
                  <XCircle size={16} className={getStatusStyles(market.status)} />
                )}
                <span className={`font-semibold ${getStatusStyles(market.status)}`}>
                  {market.status}
                </span>
              </div>
            </div>

            {/* Card Content */}
            <CardContent className="space-y-3">
              <p>
                <span className="font-medium">Start Date:</span>{" "}
                <span className="text-indigo-600 dark:text-indigo-400">{market.startDate}</span>
              </p>
              <p>
                <span className="font-medium">Expiry Date:</span>{" "}
                <span className="text-red-600 dark:text-red-400">{market.expiryDate}</span>
              </p>
              <p>
                <span className="font-medium">Remaining Days:</span>{" "}
                <span className="text-yellow-700 dark:text-yellow-400">{market.remainingDays} days</span>
              </p>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div
                  className={`h-3 rounded-full ${isActive ? "bg-green-500" : "bg-red-500"}`}
                  style={{ width: `${progress}%` }}
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    );
  })}
</div>
    </div>
  );
};

export default UserDashboard;
