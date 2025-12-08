import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, RefreshCw } from 'lucide-react';

type Market = { name: string; result: string; time: string };

const AllMarkets = ({ allMarkets, handleRefresh }: { allMarkets: Market[]; handleRefresh: () => void }) => {
  return (
    <Card className="bg-white border-2 border-orange-400 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-orange-600 to-rose-600 text-white py-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-center text-sm font-black tracking-wide flex-1">📊 ALL MARKETS</CardTitle>
          <Button size="sm" onClick={handleRefresh} className="bg-white/20 hover:bg-white/30 text-white border border-white/50 rounded-lg">
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-2">
        <div className="space-y-2">
          {allMarkets.map((market, idx) => (
            <div key={idx} className="bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50 p-3 rounded-lg border-2 border-orange-200 hover:border-rose-400 transition-all active:scale-[0.98]">
              <div className="flex justify-between items-center mb-1">
                <p className="font-black text-rose-800 text-xs">{market.name}</p>
                <p className="text-xs text-orange-600 font-semibold flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                </p>
              </div>
              <div className="bg-white/70 rounded-md p-2 mb-1">
                <p className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-orange-600">{market.result}</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-xs text-gray-600 font-medium">{market.time}</p>
                <div className="flex gap-1">
                  <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white px-2 py-1 rounded text-xs font-bold">Jodi</Button>
                  <Button size="sm" className="bg-rose-500 hover:bg-rose-600 text-white px-2 py-1 rounded text-xs font-bold">Panel</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AllMarkets;
