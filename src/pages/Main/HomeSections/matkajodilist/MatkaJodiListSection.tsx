import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


/* MATKA JODI ITEMS */
const matkaJodiItems = [

  "Matka Jodi Count Chart",
  "Dhanvarsha Daily Fix Open To Close",
  "Matka Jodi Family Chart",
  "Panel Count Chart",
  "Panel Total Chart",
  "All 220 Card List",
  
 
];

import { useNavigate } from "react-router-dom";

const MatkaJodiList = () => {
  const navigate = useNavigate();
  return (
    <div className="space-y-6">
      
      {/* MATKA JODI CARD */}
      <Card className="bg-[#f5cba7] border-2 border-blue-900 shadow-lg rounded-lg">
        <CardHeader className="bg-red-600 text-white py-2">
          <CardTitle className="text-center text-xl font-extrabold tracking-wide">
            🎯 MATKA JODI LIST
          </CardTitle>
        </CardHeader>

                 <CardContent className="p-0">
                        {matkaJodiItems.map((item, index) => (
                          <button
                            type="button"
                            key={index}
                            onClick={() => {
                              if (item.toLowerCase() === "matka jodi count chart") {
                                navigate("/matka-jodi-count-chart");
                              }
                              if (item.toLowerCase() === "dhanvarsha daily fix open to close") {
                                navigate("/fix-open-to-close-by-date");
                              }
                              if (item.toLowerCase() === "matka jodi family chart") {
                                navigate("/jodi-chart-family-matka");
                              }
                               if (item.toLowerCase() === "panel count chart") {
                                navigate("/panel-count-chart");
                              }
 if (item.toLowerCase() === "panel total chart") {
                                navigate("/panel-total-chart");
                              }
                               if (item.toLowerCase() === "all 220 card list") {
                                navigate("/all-22-card-panna-panel-patti-chart");
                              }
                            }}
                            className={`w-full px-1 py-2 text-center text-lg font-bold text-pink-700
                              ${index !== matkaJodiItems.length - 1 ? "border-b border-red-400" : ""}
                            `}
                          >
                            {item}
                          </button>
              
              
              
              
                        ))}
                      </CardContent>

      </Card>
    </div>
  );
};

export default MatkaJodiList;