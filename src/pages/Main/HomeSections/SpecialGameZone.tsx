import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const specialGameItems = [
  "Rsboss Special Game Zone",
  "SATTA MATKA GUESSING FORUM",
  "100% DATE FIX FREE GAME OPEN TO CLOSE",
  "RATAN KHATRI FIX PANEL CHART",
  "MATKA FINAL NUMBER TRICK CHART",
  "MATKA JODI LIST",
  "Matka Jodi List",
  "MATKA JODI COUNT CHART",
  "DHANVARSHA DAILY FIX OPEN TO CLOSE",
  "MATKA JODI FAMILY CHART",
  "PENAL COUNT CHART",
  "PENAL TOTAL CHART"
];

const SpecialGameZone = () => {
  return (
    <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-400 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white py-2">
        <CardTitle className="text-center text-lg font-extrabold tracking-wide">
          🏆 SPECIAL GAME ZONE
        </CardTitle>
      </CardHeader>

      <CardContent className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {specialGameItems.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-yellow-300 rounded-lg shadow-sm p-3 hover:shadow-lg transition-all duration-200"
            >
              <p className="text-sm font-semibold text-gray-800 text-center">
                {item}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SpecialGameZone;
