import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const JodiChartSection = () => {
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

  const handleClick = (chartName) => {
    alert(`Clicked on ${chartName}`);
  };

  return (
    <div className="bg-white border-2 border-green-400 shadow-lg rounded-xl p-4 mt-6">
      <h2 className="text-center font-black text-lg bg-gradient-to-r from-green-600 to-teal-600 text-white py-2 rounded-lg mb-4">
        📊 SATTA MATKA JODI CHARTS
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
        {charts.map((chart, index) => (
          <div
            key={index}
            onClick={() => handleClick(chart)}
            className="cursor-pointer rounded-xl shadow-md hover:shadow-xl transition-all duration-200 border-l-4 border-green-500 p-3 text-center text-base font-bold text-gray-800 bg-gradient-to-br from-green-50 to-teal-50"
          >
            {chart}
          </div>
        ))}
      </div>
    </div>
  );
};

export default JodiChartSection;
