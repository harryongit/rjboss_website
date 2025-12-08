import React from 'react';
import { Trophy } from 'lucide-react';

const HeaderLogo = () => {
  return (
    <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-md border-b-4 border-rose-500">
      <div className="p-3 text-center">
        <div className="flex items-center justify-center gap-2 mb-1">
          <Trophy className="h-6 w-6 text-amber-500" />
          <h1 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-orange-600 to-amber-600">
            SMBOSS.NET
          </h1>
          <Trophy className="h-6 w-6 text-amber-500" />
        </div>
        <p className="text-xs text-rose-600 font-bold tracking-wide">
          India's #1 Matka Result Website
        </p>
      </div>
    </div>
  );
};

export default HeaderLogo;
