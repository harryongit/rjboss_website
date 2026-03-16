import React from "react";

const PanelChartSection: React.FC = () => {
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
    <div className="mt-6 border-2 border-pink-500 rounded-xl overflow-hidden bg-peach">

      {/* HEADER */}
      <div className="bg-pink-600 text-white text-center py-2 text-xl font-extrabold tracking-wide rounded-t-xl">
        MATKA PANEL CHART
      </div>

      {/* LIST */}
      <div>
        {panelCharts.map((chart, index) => (
          <div
            key={index}
            className="text-center py-2 border-t border-blue-700
                       text-blue-900 text-lg font-bold italic"
          >
            {chart}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PanelChartSection;
