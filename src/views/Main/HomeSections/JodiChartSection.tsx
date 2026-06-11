"use client";

import React from "react";
import { useNavigate } from "@/lib/router-compat";

const JodiChartSection: React.FC = () => {
  const navigate = useNavigate();
  const charts = [
    "Time Chart",
    "Sridevi Chart",
    "Kalyan Morning Chart",
    "Madhuri Chart",
    "Kalyan Chart",
    "Sridevi Night Chart",
    "Kalyan Night Chart",
    "Old Main Mumbai Chart",
    "Main Bazar Chart",
    "Milan Morning Chart",
    "Milan Day Chart",
    "Milan Night Chart",
    "Madhuri Night Chart",
    "Madhur Morning Chart",
    "Madhur Day Chart",
    "Madhur Night Chart",
    "Rajdhani Night Chart",
  ];

  return (
    <div className="mt-6 border-2 border-pink-500 rounded-xl overflow-hidden bg-peach">

      {/* HEADER */}

      <div className="satta-header-pink">
        <h2 className="text-center text-white text-[16px] font-black uppercase m-0 leading-tight">
          SATTA MATKA JODI CHART
        </h2>
      </div>

      {/* LIST */}
      <div className="flex flex-col">
        {charts.map((chart, index) => {
          const marketName = chart.replace(/\b(Panel|Penal|Chart)\b/gi, '').replace(/\s+/g, ' ').trim().toUpperCase();
          return (
            <div
              onClick={() => navigate(`/jodi-records-chart/${encodeURIComponent(marketName)}`)}
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

export default JodiChartSection;
