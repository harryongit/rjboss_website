import React from 'react';

const PanelChartSection = () => {
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

  const handleClick = (chartName) => {
    alert(`Clicked on ${chartName}`);
  };

  return (
    <div className="bg-white border-2 border-blue-400 shadow-lg rounded-xl p-3 mt-6">
      <h2 className="text-center font-black text-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-2 rounded-lg mb-4">
        📊 MATKA PANEL CHARTS
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
        {panelCharts.map((chart, index) => (
          <div
            key={index}
            onClick={() => handleClick(chart)}
            className="cursor-pointer rounded-lg shadow-md hover:shadow-xl transition-all duration-200 border-l-4 border-blue-500 p-3 text-center text-base font-bold text-gray-800 bg-gradient-to-br from-blue-50 to-blue-100"
          >
            {chart}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PanelChartSection;
