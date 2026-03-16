import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import KalyanBazaarChart from './KalyanBazaarChart';
import MainBazaarChart from './MainBazaarChart';

const FreeGameZone = () => {
  return (
   <Card className="bg-peach border-0 shadow-2xl relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-40 h-40 bg-rose-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-amber-400 rounded-full blur-3xl"></div>
        </div>
  
        {/* Header */}
       

      <CardContent className="p-3 space-y-3">
        <KalyanBazaarChart></KalyanBazaarChart>
        <MainBazaarChart></MainBazaarChart>
      </CardContent>
    </Card>
  );
};

export default FreeGameZone;






