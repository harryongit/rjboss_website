import React, { useMemo } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { useParams, useLocation } from "react-router-dom";
import HeaderLogo from "../HeaderLogo";
import FooterSection from "../FooterSection";
import ScrollToggleButton from "@/components/ui/ScrollToggleButton";
import HomeButton from "@/components/ui/HomeButton";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useJodiChart } from "@/hooks/main/useJodiChart";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

/* 🎯 Winning highlight logic */
const getNumberStyle = (num: string) => {
  const n = parseInt(num, 10);
  if (isNaN(n)) return "text-black";

  // List of numbers to highlight
  const highlightedNumbers = [
    "00", "11", "22", "33", "44", "55", "66", "77", "88", "99",
    "05", "16", "27", "38", "49", "94", "83", "72", "61", "50"
  ];

  if (highlightedNumbers.includes(num)) {
    return "bg-red-500/20 text-red-700 font-bold";
  }

  return "text-black";
};

const JodiRecordChart = () => {
  const { marketName } = useParams();
  const decodedMarketName = decodeURIComponent(marketName || "RAKHI MORNING");

  const { state } = useLocation();
  const marketIdFromState = (state as any)?.marketId as number | undefined;
  const marketId = useMemo(() => marketIdFromState, [marketIdFromState]);

  // 2. Fetch jodi chart data
  const { data: jodiData, isLoading: isJodiLoading, refetch } = useJodiChart(marketId);

  const isLoading = (!!marketId && isJodiLoading);
  const dayCount = jodiData?.data?.days ?? 7;
  const displayDays = days.slice(0, dayCount);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-violet-50">
      <div className="max-w-md mx-auto">
        <HeaderLogo />

        <div className="p-3 space-y-3">
   
   <div className=" flex flex-col items-center justify-center bg-gray-50 px-4">
  {/* Market Name */}
  <div className="text-2xl font-extrabold tracking-wide drop-shadow-lg text-black text-center">
    {decodedMarketName}
  </div>

  {/* Result */}
  <div className="text-xl font-bold uppercase tracking-wider text-black mb-2 text-center">
    {jodiData?.data?.result || "Loading..."}
  </div>

  {/* Refresh Result Button */}
  <Button
    size="sm"
    onClick={() => refetch()}
    disabled={isLoading}
    className="flex items-center justify-center bg-white text-orange-600 border border-orange-600 font-bold rounded shadow-md px-4 py-2 hover:bg-white/80 transition-all duration-300"
  >
    <RefreshCw className={`h-4 w-4 mr-1 ${isLoading ? "animate-spin" : ""}`} />
    Refresh Result
  </Button>
</div>


          <Card className="border-2 border-orange-500 shadow-xl">
            {/* HEADER */}
            <CardHeader className="bg-gradient-to-r from-orange-600 via-rose-600 to-pink-600 py-2">
              <CardTitle className="text-center text-white font-black tracking-wide text-lg">
                🌅 {decodedMarketName} JODI CHART
              </CardTitle>
            </CardHeader>

            <CardContent className="p-1">
              {/* DAYS */}
              <div className="grid text-center bg-orange-100 border-b border-orange-400" style={{ gridTemplateColumns: `repeat(${dayCount}, minmax(0, 1fr))` }}>
                {displayDays.map((day) => (
                  <div
                    key={day}
                    className="text-sm font-bold text-black py-1 border border-orange-300"
                  >
                    {day}
                  </div>
                ))}
              </div>

              {/* DATA GRID */}
              <div className="grid" style={{ gridTemplateColumns: `repeat(${dayCount}, minmax(0, 1fr))` }}>
                {isLoading ? (
                    <div className="p-4 text-center" style={{ gridColumn: `1 / span ${dayCount}` }}>Loading...</div>
                ) : (
                    (jodiData?.data?.weeks?.flatMap((week) => {
                        // Ensure we always have 7 days
                        let filledJodi = [...week.jodi];
                        if (filledJodi.length > dayCount) {
                            filledJodi = filledJodi.slice(0, dayCount);
                        }
                        while(filledJodi.length < dayCount) {
                            filledJodi.push("**"); // Placeholder for empty days
                        }
                        return filledJodi;
                    }) ?? []).map((num, idx) => (
                  <div
                    key={idx}
                    className={`
                      border border-orange-200
                      text-center
                      py-1.5
                      font-medium
                      text-lg
                      rounded-sm
                      transition
                      hover:scale-105
                      ${getNumberStyle(num)}
                    `}
                  >
                    {num}
                  </div>
                )))}
              </div>
            </CardContent>
          </Card>

          <FooterSection />
        </div>
      </div>

      <ScrollToggleButton />
      <HomeButton />
    </div>
  );
};

export default JodiRecordChart;
