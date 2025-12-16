import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const WeeklyLineChart = ({ weeklyLineData }: { weeklyLineData: { day: string; number: string; span: number }[] }) => {
  return (
    <Card className="bg-white border border-teal-300 shadow-sm rounded-lg">
      <CardHeader className="bg-teal-500 text-white py-1 rounded-t-lg">
        <CardTitle className="text-center text-base font-bold tracking-tight">
          📊 SmBoss Net Weekly Line Open Or Close From 14-07-2025 To 20-07-2025 For Kalyan, Milan, Kalyan Night, Rajdhani, Time, Main Bazar, Mumbai Royal Night
        </CardTitle>
      </CardHeader>

      <CardContent className="p-1">
        <div className="grid grid-cols-1 gap-0 text-center">
          {weeklyLineData.map((item) => (
            <div
              key={item.day}
              className="flex flex-col items-center justify-center border border-teal-200 rounded-sm p-1 "
             
            >

              <span className="text-lg font-bold text-cyan-700">{item.day} {item.number}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default WeeklyLineChart;
