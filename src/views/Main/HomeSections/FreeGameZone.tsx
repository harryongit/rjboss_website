import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import KalyanBazaarChart from './KalyanBazaarChart';
import MainBazaarChart from './MainBazaarChart';

const FreeGameZone = () => {
  return (
    <div className="w-full mt-2">

      <Card className="w-full bg-peach border-0 shadow-2xl relative overflow-hidden rounded-none">

        {/* Decorative background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-40 h-40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40  rounded-full blur-3xl"></div>
        </div>

        {/* Content */}
        <CardContent className="p-0 space-y-2 relative z-10">
          <KalyanBazaarChart />
          <MainBazaarChart />
        </CardContent>

      </Card>
    </div>
  );
};

export default FreeGameZone;