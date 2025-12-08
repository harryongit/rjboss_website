

import { useState } from "react";
import { DataTable } from "@/components/common/DataTable";

const Settings = () => {
  const [holidays, setHolidays] = useState([
    { id: 1, gameName: "Kalyan Matka", status: "On" },
    { id: 2, gameName: "Milan Day", status: "Off" },
    { id: 3, gameName: "Rajdhani Day", status: "On" },
  ]);

  const toggleStatus = (row: any, value: "On" | "Off") => {
    setHolidays((prev) =>
      prev.map((h) => (h.id === row.id ? { ...h, status: value } : h))
    );
  };

  const columns = [
    { header: "Game Name", accessor: "gameName" },
    {
      header: "Status",
      accessor: "status",
      cell: (value: string, row: any) => (
        <div className="flex items-center gap-4">
          {/* Display status text */}
        

          {/* Radio buttons */}
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
        title="All Options"
        columns={columns}
        data={holidays}
        actions={false} // hides the default action column
      />
    </div>
  );
};

export default Settings;
