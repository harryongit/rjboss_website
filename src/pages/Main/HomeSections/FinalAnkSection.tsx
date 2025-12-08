import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RefreshCw, TrendingUp } from 'lucide-react';

type FinalAnkItem = { market: string; ank: string };

const FinalAnkSection = ({ finalAnk, handleRefresh }: { finalAnk: FinalAnkItem[]; handleRefresh: () => void }) => {
  return (
    <Card className="bg-white border-2 border-orange-300 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-orange-500 to-rose-500 text-white py-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-center text-sm font-black tracking-wide flex items-center justify-center gap-2 flex-1">
            <TrendingUp className="h-4 w-4" />
            FINAL ANK
          </CardTitle>
          <Button
            size="sm"
            onClick={handleRefresh}
            className="bg-white/20 hover:bg-white/30 text-white border border-white/50 rounded-lg"
          >
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-2">
        <div className="grid grid-cols-2 gap-2">
          {finalAnk.map((item, idx) => (
            <div key={idx} className="bg-gradient-to-br from-orange-50 to-rose-50 p-2 rounded-lg border border-orange-200">
              <p className="text-xs font-bold text-rose-800 mb-1 truncate">{item.market}</p>
              <p className="text-2xl font-black text-orange-600">{item.ank}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default FinalAnkSection;
