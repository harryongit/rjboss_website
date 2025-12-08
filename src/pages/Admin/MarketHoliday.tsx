

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/common/DataTable";
import { toast } from "sonner";

const MarketHoliday = () => {
  const [holidays, setHolidays] = useState([
    { id: 1, gameName: "Kalyan Matka", status: "On" },
    { id: 2, gameName: "Milan Day", status: "Off" },
    { id: 3, gameName: "Rajdhani Day", status: "On" },
  ]);

  const toggleStatus = (row: any, value: "On" | "Off") => {
    setHolidays((prev) =>
      prev.map((h) => (h.id === row.id ? { ...h, status: value } : h))
    );
    toast.success(`${row.gameName} holiday status set to ${value}`);
  };

  const columns = [
   
    { header: "Game Name", accessor: "gameName" },
    {
      header: "Holiday Status",
      accessor: "status",
      cell: (value: string, row: any) => (
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-1">
            <input
              type="radio"
              name={`holiday-${row.id}`}
              value="On"
              checked={value === "On"}
              onChange={() => toggleStatus(row, "On")}
              className="accent-green-500"
            />
            On
          </label>
          <label className="flex items-center gap-1">
            <input
              type="radio"
              name={`holiday-${row.id}`}
              value="Off"
              checked={value === "Off"}
              onChange={() => toggleStatus(row, "Off")}
              className="accent-red-500"
            />
            Off
          </label>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      
      
       
          <DataTable
            title="Market Holidays"
            columns={columns}
            data={holidays}
            actions={false} 
          />
     
      
    </div>
  );
};

export default MarketHoliday;
