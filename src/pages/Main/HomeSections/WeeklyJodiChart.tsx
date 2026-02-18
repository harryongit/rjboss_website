import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const WeeklyJodiChart = () => {
  const jodis = [
    '23', '28', '73', '78', '41', '46', '91', '96',
    '10', '15', '60', '65', '24', '29', '74', '79',
    '31', '86', '13', '68', '44', '49', '94', '99'
  ];

  return (
    <Card className="bg-white border-2 border-pink-300 shadow-md rounded-lg">
      <CardHeader className="bg-pink-500 text-white py-2 rounded-t-lg">
        <CardTitle className="text-center text-base font-bold tracking-tight">
          🎯 SpdpBoss Net Weekly Jodi Chart <br />
          14-06-2025 To 20-07-2025 | Kalyan Milan Kalyan Night, Rajdhani Time, Main Bazar, Mumbai Royal Night Market
        </CardTitle>
      </CardHeader>

      <CardContent className="p-2">
        <div className="grid grid-cols-4 gap-1">
          {jodis.map((jodi, idx) => (
            <div
              key={idx}
              className="bg-pink-50 border border-pink-200 text-pink-700 text-lg font-bold rounded flex items-center justify-center py-1"
            >
              {jodi}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default WeeklyJodiChart;
