
import React from "react";

const JodiChartSection: React.FC = () => {
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
      <div className="bg-pink-600 text-white text-center py-2 text-xl font-extrabold tracking-wide">
        SATTA MATKA JODI CHART
      </div>

      {/* LIST */}
      <div>
        {charts.map((chart, index) => (
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

export default JodiChartSection;
