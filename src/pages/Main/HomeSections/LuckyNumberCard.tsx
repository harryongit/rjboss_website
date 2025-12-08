import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

const LuckyNumberCard = () => {
  return (
    <Card className="bg-gradient-to-br from-yellow-100 via-amber-100 to-orange-100 border-4 border-rose-600 shadow-2xl relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,200,100,0.4),transparent)]"></div>
      <CardHeader className="bg-gradient-to-r from-rose-600 via-orange-600 to-amber-600 text-white py-3">
        <CardTitle className="text-center text-lg font-black tracking-wide flex items-center justify-center gap-2">
          <Sparkles className="h-5 w-5" />
          TODAY LUCKY NUMBER
          <Sparkles className="h-5 w-5" />
        </CardTitle>
      </CardHeader>
      <CardContent className="py-6 text-center relative z-10">
        <p className="text-base font-bold text-rose-700 mb-2 tracking-wide">Golden Ank</p>
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 inline-block shadow-xl border-3 border-amber-500">
          <p className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-700 via-orange-600 to-amber-600 tracking-widest">
            1-6-3-8
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default LuckyNumberCard;
