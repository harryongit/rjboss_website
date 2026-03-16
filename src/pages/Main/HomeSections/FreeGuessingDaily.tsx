import React from "react";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDailyGuessingFreeFix } from "@/hooks/common/useDailyGuessingFreeFix";

type GuessingItem = {
  market_name: string;
  single?: string;
  panna?: string;
  jodi?: string;
};



const FreeGuessingDaily: React.FC = () => {
  const query = useDailyGuessingFreeFix();

  const apiItems: GuessingItem[] = query.data?.data?.items ?? [];

  // show dummy markets if API empty
  const items = apiItems.length > 0 ? apiItems : [];

  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();
  const dateStr = `${dd}/${mm}/${yyyy}`;

  return (
    <div className="max-w-3xl mx-auto bg-[#f6c79b] border-2 border-pink-500 rounded-md overflow-hidden shadow-md">

      {/* HEADER */}
      <div className="bg-pink-600 text-white text-center py-2 font-extrabold text-lg tracking-wide">
        FREE GAME ZONE OPEN-CLOSE
      </div>

      {/* DATE + REFRESH */}
      <div className="relative border-2 border-pink-500 mx-2 my-2 rounded-md text-center font-bold bg-[#f6c79b] py-2 space-y-1">
        <div>✓ DATE: {dateStr}</div>
        <div>FREE GUESSING DAILY</div>
        <div>OPEN TO CLOSE FIX ANK</div>

        <Button
          size="icon"
          onClick={() => query.refetch()}
          className="absolute right-2 top-2 bg-green-600 hover:bg-green-700 text-white rounded-md"
        >
          <RefreshCw
            size={16}
            className={query.isFetching ? "animate-spin" : ""}
          />
        </Button>
      </div>

      {/* MARKETS GRID */}
      <div className="grid grid-cols-2 gap-2 p-2">

        {query.isFetching && (
          <div className="col-span-2 text-center text-red-600 font-semibold py-4">
            Loading...
          </div>
        )}

        {!query.isFetching &&
          items.map((it: GuessingItem, idx: number) => (
            <div
              key={idx}
              className="border-2 border-green-700 rounded-lg overflow-hidden bg-[#f6c79b] shadow-md"
            >
              {/* MARKET TITLE */}
              <div className="bg-green-700 text-white text-center font-extrabold py-2 text-sm sm:text-base rounded-b-xl">
                ↪ {it.market_name?.toUpperCase()}
              </div>

              {/* NUMBERS */}
              <div className="text-center text-blue-900 font-bold py-3 leading-6 text-xs sm:text-sm whitespace-pre-wrap">
                <div>{it.single}</div>
                <div>{it.panna}</div>
                <div>{it.jodi}</div>
              </div>
            </div>
          ))}

      </div>
    </div>
  );
};

export default FreeGuessingDaily;
