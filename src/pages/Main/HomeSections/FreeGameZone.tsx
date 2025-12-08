import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const FreeGameZone = ({ freeGames }: { freeGames: { name: string; number: string; boldNumbers: string; smallNumbers: string }[] }) => {
  return (
    <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-400 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-2">
        <CardTitle className="text-center text-sm font-black tracking-wide">🎮 FREE GAME ZONE - OPEN TO CLOSE</CardTitle>
        <p className="text-center text-xs mt-1">Date: 07/12/2025</p>
      </CardHeader>

      <CardContent className="p-3 space-y-3">
        {freeGames.map((game) => (
          <div key={game.name} className="bg-white p-3 rounded-lg border-2 border-green-300">
            <p className="text-xs font-black text-green-800 mb-2">↪ {game.name}</p>
            <p className="text-lg font-black text-rose-700 mb-1">{game.number}</p>
            <p className="text-xs font-bold text-orange-600 mb-1">{game.boldNumbers}</p>
            <p className="text-xs font-semibold text-gray-700">{game.smallNumbers}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default FreeGameZone;
