import React from "react";

const DailyGameChart = () => {
  const rows = [
    { day: "Mon", data: [["1","248","46"],["1","880","64"],["1","890","79"],["1","469","97"]] },
    { day: "Tue", data: [["4","248","46"],["6","880","64"],["7","890","79"],["9","461","77"]] },
    { day: "Wed", data: [["4","248","46"],["6","880","64"],["7","890","79"],["9","469","97"]] },
    { day: "Thu", data: [["4","248","46"],["6","880","64"],["7","890","79"],["9","111","97"]] },
    { day: "Fri", data: [["4","248","46"],["6","880","64"],["7","890","79"],["9","987","97"]] },
    { day: "Sat", data: [["4","000","46"],["6","111","64"],["7","000","79"],["9","222","97"]] },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto border-2 border-orange-600 bg-yellow-50">

      {/* Header */}
      <div className="bg-yellow-300 text-center font-extrabold text-lg text-black py-1 border-b-2 border-orange-600">
        Kalyan
      </div>

      <table className="w-full border-collapse text-center">
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {/* Day */}
              <td className="border-2 border-orange-600 font-bold bg-yellow-200 text-black w-[60px]">
                {row.day}
              </td>

              {/* Cells */}
              {row.data.map((cell, idx) => (
                <td
                  key={idx}
                  className="border-2 border-orange-600 p-0 bg-yellow-100"
                >
                  <div className="flex h-full">

                    {/* LEFT DIGIT */}
                    <div className="w-[32%] flex items-center justify-center border-r-2 border-orange-600">
                      <span className="text-2xl font-extrabold text-red-700">
                        {cell[0]}
                      </span>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="w-[68%] flex flex-col">
                      <div className="flex items-center justify-center border-b-2 border-orange-600 text-base font-extrabold text-black leading-tight">
                        {cell[1]}
                      </div>
                      <div className="flex items-center justify-center text-sm font-extrabold text-blue-800 leading-tight">
                        {cell[2]}
                      </div>
                    </div>

                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DailyGameChart;