import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type LiveMarket = {
  name: string;
  result: string;
  time: string;
  status: string;
  captionFlag?: number;
};

const LiveResults = ({
  liveMarkets,
  refreshTime,
  handleRefresh,
}: {
  liveMarkets: LiveMarket[];
  refreshTime: string;
  handleRefresh: () => void;
}) => {
  return (
    <Card className="satta-card-outset bg-[#fc9] p-0 overflow-hidden">

      {/* Header */}
      <CardHeader className="satta-header-pink p-0">
        <div className="py-[2px]">
          <CardTitle className="text-[18px] font-bold italic tracking-wide m-0 leading-[1]">
            ☔ LIVE RESULT ☔
          </CardTitle>
        </div>
      </CardHeader>

      {/* Message */}
      <p className="text-center font-bold text-black text-[16px] leading-[1] my-[2px]">
        Sabse Tezz Live Result Yahi Milega
      </p>

      {/* Market List */}
      <CardContent className="p-0">
        {(!liveMarkets || liveMarkets.length === 0) && (
          <div className="text-center text-red-700 font-semibold border border-red-200 m-1 rounded-md p-1 text-sm">
            No live markets available at the moment.
          </div>
        )}

        {liveMarkets &&
          liveMarkets.length > 0 &&
          liveMarkets.map((market, idx) => (
            <div
              key={idx}
              className="text-center border-b border-red-600 last:border-b-0 py-[2px]"
            >
              {/* Market Name */}
              <h3 className="satta-market-name text-[20px] leading-[1] m-0">
                {market.name}
              </h3>

              {/* Result */}
              <p className="satta-result-purple text-[19px] leading-[1] my-[2px]">
                {market.result}
              </p>

              {/* Refresh Button */}
              <div className="my-[2px]">
                <button
                  onClick={handleRefresh}
                  className="satta-btn-purple text-[11px] py-[2px] px-[6px]"
                >
                  Refresh
                </button>
              </div>

              {/* Caption */}
              {(market.captionFlag ?? 0) === 1 && (
                <p className="satta-caption text-[18px] leading-[1] mt-[2px]">
                  {market.result?.toLowerCase() === "loading"
                    ? "खबर लाइन चालू है"
                    : "सबसे तेज सबसे सही"}
                </p>
              )}
            </div>
          ))}
      </CardContent>
    </Card>
  );
};

export default LiveResults;