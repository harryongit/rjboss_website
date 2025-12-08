import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const WeeklyPattiChart = ({ weeklyPatti }: { weeklyPatti: { number: string; values: string }[] }) => {
  return (
    <Card className="bg-white border-2 border-purple-400 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2">
        <CardTitle className="text-center text-sm font-black tracking-wide">📅 WEEKLY PATTI CHART (01-12-2025 to 06-12-2025)</CardTitle>
      </CardHeader>
      <CardContent className="p-3">
        <div className="space-y-2">
          {weeklyPatti.map((item) => (
            <div key={item.number} className="bg-gradient-to-br from-purple-50 to-indigo-50 p-2 rounded-lg border border-purple-200">
              <p className="text-xs font-bold text-purple-800 mb-1">{item.number} ⇒</p>
              <p className="text-sm font-black text-indigo-700">{item.values}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default WeeklyPattiChart;
