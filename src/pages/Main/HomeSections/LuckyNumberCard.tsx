import React, { useEffect, useRef } from "react";

type FinalAnkItem = { market: string; ank: string };

const LuckyNumberCard = ({
  goldenAnk = "2-7-0-5",
  finalAnk = [
    { market: "SRIDEVI", ank: "2" },
    { market: "MUMBAI DAY", ank: "3" },
    { market: "MILAN DAY", ank: "6" },
    { market: "KALYAN", ank: "8" },
    { market: "MADHURI", ank: "4" },
  ],
}: {
  goldenAnk?: string;
  finalAnk?: FinalAnkItem[];
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let interval: number;
    let isPaused = false;

    interval = window.setInterval(() => {
      if (!isPaused) {
        scrollContainer.scrollTop += 1;

        // reset when half of duplicated content is reached
        if (scrollContainer.scrollTop >= scrollContainer.scrollHeight / 2) {
          scrollContainer.scrollTop = 0;
        }
      }
    }, 30);

    const pause = () => (isPaused = true);
    const resume = () => (isPaused = false);

    scrollContainer.addEventListener("mouseenter", pause);
    scrollContainer.addEventListener("mouseleave", resume);

    return () => {
      clearInterval(interval);
      scrollContainer.removeEventListener("mouseenter", pause);
      scrollContainer.removeEventListener("mouseleave", resume);
    };
  }, []);

  return (
    <div className="max-w-md mx-auto border-2 border-red-700 rounded-lg overflow-hidden bg-[#f7cfa8] shadow-md font-sans">
      {/* Header */}
      <div className="bg-pink text-white text-center font-bold italic text-2xl py-1 rounded-xl border-4 border-white select-none" style={{
        textShadow: '0 0 2px black, 0 0 2px black, 0 0 2px black',
      }}>
        Today Lucky Number
      </div>

      {/* Content */}
      <div className="grid grid-cols-2 gap-4 h-13">
        {/* Golden Ank */}
        <div className="text-center border-r-2 border-red-400 pr-4">
          <p className="text-blue font-semibold italic text-[18px]" style={{
            textShadow: '0 0 1px white, 0 0 1px white, 0 0 1px white',
          }}>Golden Ank</p>
          <p className="text-xl font-extrabold text-black tracking-widest mt-1">
            {goldenAnk}
          </p>
        </div>

        {/* Final Ank */}
        <div className="pl-4">
          <p className="text-blue font-semibold italic text-[18px] text-center" style={{
            textShadow: '0 0 1px white, 0 0 1px white, 0 0 1px white',
          }}>
            Final Ank
          </p>

          <div
            ref={scrollRef}
            className="h-16 overflow-y-auto no-scrollbar text-xs font-bold text-blue-900 leading-tight mt-1"
          >
            <style>{`
              .no-scrollbar::-webkit-scrollbar {
                display: none;
              }
              .no-scrollbar {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
            `}</style>

            {[...finalAnk, ...finalAnk].map((item, idx) => (
              <div key={idx} className="text-center">
                {item.market} - {item.ank}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuckyNumberCard;