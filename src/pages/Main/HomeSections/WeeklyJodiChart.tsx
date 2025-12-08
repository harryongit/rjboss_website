import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const WeeklyJodiChart = () => {
  const jodis = ['23', '28', '73', '78', '41', '46', '91', '96', '10', '15', '60', '65', '24', '29', '74', '79', '31', '86', '13', '68', '44', '49', '94', '99'];
  return (
    <Card className="bg-white border-2 border-pink-400 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-pink-600 to-rose-600 text-white py-2">
        <CardTitle className="text-center text-sm font-black tracking-wide">🎯 WEEKLY JODI CHART (01-12 to 06-12-2025)</CardTitle>
      </CardHeader>
      <CardContent className="p-3">
        <div className="grid grid-cols-4 gap-2">
          {jodis.map((jodi, idx) => (
            <div key={idx} className="bg-gradient-to-br from-pink-50 to-rose-50 p-2 rounded-lg border border-pink-200 text-center">
              <p className="text-base font-black text-rose-700">{jodi}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default WeeklyJodiChart;
