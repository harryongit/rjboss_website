import React, { useMemo, useState } from "react";
import { useMainStarLineTodayResult } from "@/hooks/common/useMainStarLineTodayResult";
import { useNavigate } from "react-router-dom";

const MainStarLineSection = () => {
  const [view] = useState<'today' | 'chart'>('today');
  const navigate = useNavigate();
  const todayQuery = useMainStarLineTodayResult();

  const todayItems = useMemo(() => {
    const raw: any = todayQuery.data?.data;
    const items: any[] = Array.isArray(raw) ? raw : (raw?.items ?? []);
    const sorted = items
      .slice()
      .sort((a, b) =>
        (a.result_time ?? '').localeCompare(b.result_time ?? '')
      );

    return sorted.map((it) => ({
      time: to12Hour(it.result_time),
      result: it.result ?? '--',
    }));
  }, [todayQuery.data]);

  const latestIndex = useMemo(() => {
    const idx = todayItems
      .map((r) => r.result)
      .lastIndexOf(
        todayItems
          .slice()
          .reverse()
          .find((r) => r.result !== "--")?.result
      );
    return idx < 0 ? todayItems.length - 1 : idx;
  }, [todayItems]);

  return (
    <div className="mt-4 w-full max-w-md mx-auto">

      {/* HEADER (Yellow pill like image) */}
      <div className="bg-yellow-400 text-black text-center font-bold italic text-2xl py-1 rounded-xl border-2 border-black select-none" style={{
        textShadow: '0 0 2px white, 0 0 2px white, 0 0 2px white',
      }}>
        MAIN STARLINE
      </div>

      {/* TABLE */}
      {view === 'today' && (
        <div className="border-2 border-red-600">
          <table className="w-full border-collapse text-center text-sm">

            {/* HEAD */}
            <thead>
              <tr className="bg-[#f3e5d8]">
                <th className="border border-red-600 py-1 font-bold">Time</th>
                <th className="border border-red-600 py-1 font-bold">Result</th>
                <th className="border border-red-600 py-1 font-bold">Time</th>
                <th className="border border-red-600 py-1 font-bold">Result</th>
              </tr>
            </thead>

            {/* BODY */}
            <tbody>
              {Array.from({ length: Math.ceil(todayItems.length / 2) }).map((_, rowIndex) => {
                const leftIndex = rowIndex * 2;
                const rightIndex = leftIndex + 1;

                const leftItem = todayItems[leftIndex];
                const rightItem = todayItems[rightIndex];

                const leftLatest = leftIndex === latestIndex;
                const rightLatest = rightIndex === latestIndex;

                return (
                  <tr key={rowIndex} className="bg-[#f7caa2]">

                    {/* LEFT TIME */}
                    <td className="border border-red-600 py-1 font-bold text-black">
                      {leftItem?.time ?? ''}
                    </td>

                    {/* LEFT RESULT */}
                    <td
                      className={`border border-red-600 py-1 text-lg font-extrabold ${leftLatest
                        ? "bg-red-600 text-white"
                        : !leftItem || leftItem.result === "--"
                          ? "bg-gray-200 text-gray-400"
                          : "text-black"
                        }`}
                    >
                      {leftItem?.result ?? ''}
                    </td>

                    {/* RIGHT SIDE */}
                    {rightItem ? (
                      <>
                        <td className="border border-red-600 py-1 font-bold text-black">
                          {rightItem.time}
                        </td>

                        <td
                          className={`border border-red-600 py-1 text-lg font-extrabold ${rightLatest
                            ? "bg-red-600 text-white"
                            : rightItem.result === "--"
                              ? "bg-gray-200 text-gray-400"
                              : "text-black"
                            }`}
                        >
                          {rightItem.result}
                        </td>
                      </>
                    ) : (
                      <>
                        <td className="border border-red-600"></td>
                        <td className="border border-red-600"></td>
                      </>
                    )}
                  </tr>
                );
              })}
            </tbody>

          </table>
        </div>
      )}
    </div>
  );
};

export default MainStarLineSection;

// ⏰ Time formatter (unchanged)
function to12Hour(t?: string): string {
  if (!t) return '';
  const [h, m] = t.split(':');
  const hh = Number(h);
  const suffix = hh >= 12 ? 'PM' : 'AM';
  const displayHour = hh % 12 === 0 ? 12 : hh % 12;
  return `${String(displayHour).padStart(2, '0')}:${m} ${suffix}`;
}