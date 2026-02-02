import React, { useMemo } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { useParams } from "react-router-dom";
import HeaderLogo from "../HeaderLogo";
import FooterSection from "../FooterSection";
import ScrollToggleButton from "@/components/ui/ScrollToggleButton";
import HomeButton from "@/components/ui/HomeButton";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import { useMainWebsite } from "@/hooks/main/useMainWebsite";
import { usePanelChart, PanelChartWeek, PanelChartDayData } from "@/hooks/main/usePanelChart";
import { format } from "date-fns";

// Array of days to iterate
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const PanelRecordChart = () => {
  const { marketName } = useParams();
  const decodedMarketName = decodeURIComponent(marketName || "RAKHI MORNING");

  // 1. Fetch main website data to find market_id
  const { data: mainData, isLoading: isMainLoading } = useMainWebsite();

  const marketId = useMemo(() => {
    if (!mainData?.data?.all_markets) return undefined;
    const market = mainData.data.all_markets.find(
      (m) => m.market_name.toLowerCase() === decodedMarketName.toLowerCase()
    );
    return market?.market_id;
  }, [mainData, decodedMarketName]);

  // 2. Fetch panel chart data
  const { data: panelData, isLoading: isPanelLoading, refetch } = usePanelChart(marketId);

  const isLoading = isMainLoading || (!!marketId && isPanelLoading);

  const isDoubleNumber = (num: string) =>
    num.length === 2 && num[0] === num[1];

  // Helper to format date range
  const formatDateRange = (start: string, end: string) => {
    try {
        const s = new Date(start);
        const e = new Date(end);
        return `${format(s, "dd/MM/yyyy")} to ${format(e, "dd/MM/yyyy")}`;
    } catch {
        return `${start} to ${end}`;
    }
  };

  // Helper to process day data
  const processDayData = (dayData?: PanelChartDayData) => {
    if (!dayData) return [[""], [""], [""]];
    
    // open: "389" -> ["3", "8", "9"]
    // jodi: "00" -> ["00"]
    // close: "569" -> ["5", "6", "9"]
    
    const openArr = dayData.open ? dayData.open.split('') : [""];
    const jodiArr = dayData.jodi ? [dayData.jodi] : ["**"]; // Use ** or similar for empty/closed
    const closeArr = dayData.close ? dayData.close.split('') : [""];
    
    // If empty strings resulted from split, ensure they are filtered or handled
    // But split('') on empty string returns []? No, returns [""] if string is "".
    // If open is "***", split gives ["*", "*", "*"]
    
    return [openArr, jodiArr, closeArr];
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-violet-50">
      <div className="max-w-md mx-auto">
        <HeaderLogo />

        <div className="p-3 space-y-3">
          {/* Market Name & Refresh */}
          <div className="flex flex-col items-center mb-4 space-y-2">
            <div className="text-2xl font-extrabold text-black drop-shadow-lg text-center">
              {decodedMarketName}
            </div>
            <div className="text-xl font-bold uppercase tracking-wider text-black">
              {panelData?.data?.result || "Loading..."}
            </div>
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

          {/* Panel Chart */}
          <Card className="border-2 border-orange-500 shadow-xl mt-4">
            <CardHeader className="bg-gradient-to-r from-orange-600 via-rose-600 to-pink-600 py-2">
              <CardTitle className="text-center text-white font-black tracking-wide text-lg">
                🌅 {decodedMarketName} PANEL CHART
              </CardTitle>
            </CardHeader>

            <CardContent className="p-0 text-[8px]">
              <div className="overflow-x-auto">
                <table className="table-auto border-collapse w-full text-center">
                  <thead>
                    <tr className="bg-orange-100">
                      <th className="border px-2 py-1">Date</th>
                      {days.map((day) => (
                        <th key={day} className="border  px-2 py-1">{day}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {isLoading ? (
                         <tr>
                             <td colSpan={8} className="p-4 text-lg">Loading...</td>
                         </tr>
                    ) : (
                        panelData?.data?.weeks.map((week, idx) => (
                      <tr key={idx}>
                        <td className="border text-[9px] font-bold">
                            {formatDateRange(week.start_date, week.end_date)}
                        </td>
                        {week.data.map((dayData, dayIdx) => {
                          const [openArr, jodiArr, closeArr] = processDayData(dayData);
                          
                          // List of numbers to highlight
                          const highlightedNumbers = [
                            "00", "11", "22", "33", "44", "55", "66", "77", "88", "99",
                            "05", "16", "27", "38", "49", "94", "83", "72", "61", "50"
                          ];
                          
                          // Check if Jodi matches highlighted numbers
                          const highlightRed = dayData?.jodi && highlightedNumbers.includes(dayData.jodi); 

                          return (
                            <td key={dayIdx} className="border ">
                              <div className="flex justify-center gap-2">
                                {[openArr, jodiArr, closeArr].map((cell, i) => (
                                  <div
                                    key={i}
                                    className="flex flex-col justify-center items-center"
                                    style={{ minHeight: "3rem" }}
                                  >
                                    {cell.map((num, nIdx) => (
                                      <span
                                        key={nIdx}
                                        className={`
                                            ${highlightRed ? "text-red-600 font-bold" : ""}
                                            ${isDoubleNumber(num) ? "text-[11px]" : "text-[9px]"}
                                        `}
                                        >
                                        {num}
                                        </span>
                                    ))}
                                  </div>
                                ))}
                              </div>
                            </td>
                          );
                        })}
                         {/* Fill remaining cells if week data is incomplete (should be 7) */}
                         {Array.from({ length: 7 - (week.data?.length || 0) }).map((_, i) => (
                            <td key={`empty-${i}`} className="border"></td>
                         ))}
                      </tr>
                    )))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
        <FooterSection />
      </div>
      <ScrollToggleButton />
      <HomeButton />
    </div>
  );
};

export default PanelRecordChart;
