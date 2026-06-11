"use client";

import React from "react";
import { useNavigate } from "@/lib/router-compat";

const PanelChartSection: React.FC = () => {
  const navigate = useNavigate();
  const panelCharts = [
    "Time Panel Chart",
    "Sridevi Panel Chart",
    "Kalyan Morning Panel Chart",
    "Madhuri Penal Chart",
    "Padmavathi Penal Chart",
    "Kalyan Penal Chart",
    "Sridevi Night Penal Chart",
    "Kalyan Night Penal Chart",
    "Old Main Mumbai Panel Chart",
    "Main Bazar Penal Chart",
    "Milan Morning Panel Chart",
    "Milan Day Penal Chart",
    "Milan Night Penal Chart",
    "Madhuri Night Panel Chart",
    "Rajdhani Night Panel Chart",
    "Madhur Morning Day Chart",
    "Madhur Day Panel Chart",
  ];

  return (
    <div className="mt-6 border-2 border-pink-500 rounded-xl overflow-hidden">

      {/* HEADER */}
      <div className="satta-header-pink">
        <h2 className="text-center text-white text-[16px] font-black uppercase m-0 leading-tight">
          MATKA PANEL CHART
        </h2>
      </div>
      {/* LIST */}
      <div className="flex flex-col">
        {panelCharts.map((chart, index) => {
          const marketName = chart.replace(/\b(Panel|Penal|Chart)\b/gi, '').replace(/\s+/g, ' ').trim().toUpperCase();
          return (
            <div
              onClick={() => navigate(`/panel-records-chart/${encodeURIComponent(marketName)}`)}
              key={index}
              className="text-center border-t border-blue-700
                         text-blue-900 text-[22px] font-bold italic block hover:bg-pink-100 transition-colors py-1 cursor-pointer"
            >
              {chart}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PanelChartSection;