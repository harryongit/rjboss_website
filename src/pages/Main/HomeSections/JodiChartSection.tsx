
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

      <div className="satta-header-pink">
        <h2 className="text-center text-white text-[16px] font-black uppercase m-0 leading-tight">
          SATTA MATKA JODI CHART
        </h2>
      </div>

      {/* LIST */}
      <div>
        {charts.map((chart, index) => (
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

export default JodiChartSection;
