import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const WeeklyLineChart = ({ weeklyLineData }: { weeklyLineData: { day: string; number: string; span: number }[] }) => {
  return (
    <Card className="bg-white border-2 border-teal-400 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-2">
        <CardTitle className="text-center text-sm font-black tracking-wide">📊 WEEKLY LINE OPEN/CLOSE (01-12 to 06-12-2025)</CardTitle>
      </CardHeader>
      <CardContent className="p-3">
        <div className="grid grid-cols-2 gap-2">
          {weeklyLineData.map((item) => (
            <div key={item.day} className={`bg-gradient-to-br from-teal-50 to-cyan-50 p-2 rounded-lg border border-teal-200 ${item.span > 1 ? 'col-span-2' : ''}`}>
              <p className="text-xs font-bold text-teal-800 mb-1">{item.day}</p>
              <p className="text-lg font-black text-cyan-700">{item.number}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default WeeklyLineChart;
