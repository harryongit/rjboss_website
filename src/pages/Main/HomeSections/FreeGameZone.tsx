import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import KalyanBazaarChart from './KalyanBazaarChart';
import MainBazaarChart from './MainBazaarChart';

const FreeGameZone = ({ freeGames }: { freeGames: { name: string; number: string; boldNumbers: string; smallNumbers: string }[] }) => {
  return (
   <Card className="bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 border-0 shadow-2xl relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-40 h-40 bg-rose-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-amber-400 rounded-full blur-3xl"></div>
        </div>
  
        {/* Header */}
        <CardHeader className="relative bg-gradient-to-r from-rose-600 via-orange-600 to-amber-600 text-white py-3">
                <CardTitle className="text-center text-base font-black tracking-wide">
          🎮 FREE GAME ZONE - OPEN TO CLOSE
        </CardTitle>

          <p className="text-center text-base mt-1">Date: 07/12/2025</p>
         
        </CardHeader>

      <CardContent className="p-3 space-y-3">
        <KalyanBazaarChart></KalyanBazaarChart>
        <MainBazaarChart></MainBazaarChart>
      </CardContent>
    </Card>
  );
};

export default FreeGameZone;






