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
    <div className="mt-6 border-2 border-pink-500 rounded-xl overflow-hidden">

      {/* HEADER */}
      <div className="satta-header-pink">
        <h2 className="text-center text-white text-[16px] font-black uppercase m-0 leading-tight">
          MATKA PANEL CHART
        </h2>
      </div>
      {/* LIST */}
      <div>
        {panelCharts.map((chart, index) => (
          <div
            key={index}
            className="text-center border-t border-blue-700
                       text-blue-900 text-[22px] font-bold italic"
          >
            {chart}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PanelChartSection;