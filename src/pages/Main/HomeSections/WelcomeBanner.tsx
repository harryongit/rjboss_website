import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import laxmiDevi from "@/assets/laxmi-devi.jpg";

const WelcomeSection = () => {
  return (
    <div className="space-y-4">

      {/* ---------- CARD 1: IMAGE + WELCOME MESSAGE ---------- */}
      <Card className="bg-gradient-to-br from-amber-100 via-orange-100 to-rose-100 border-2 border-orange-400 shadow-lg rounded-xl">
  <CardContent className="py-4">

    <div className="flex items-center gap-4">

      {/* Left Image */}
      <img
        src={laxmiDevi}
        alt="Laxmi Devi"
        className="h-24 w-28 rounded-lg shadow-md object-cover border border-orange-300"
      />

      {/* Right Text */}
      <div className="flex flex-col justify-center text-left">
        <p className="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-orange-600 leading-snug">
          🙏 Welcome to SMBoss International 🙏
        </p>

        <p className="text-orange-800 font-semibold text-sm mt-1">
          ⚡ Satta Matka Fast Result ⚡
        </p>

        {/* Reduced Message */}
        <p className="text-[11px] text-rose-700 font-medium leading-tight mt-1">
          India’s No.1 Satta Matka fast result platform.
        </p>
      </div>

    </div>

  </CardContent>
</Card>




      {/* ---------- CARD 2: SMBOSS MATKA DESCRIPTION ---------- */}
      <Card className="bg-gradient-to-br from-rose-50 to-orange-50 border-2 border-rose-300 shadow-md rounded-xl">
  <CardContent className="py-4">

    <p className="text-base font-bold text-rose-700 mb-2">
      SmBoss Satta Matka Kalyan Matka Result
    </p>

    <p className="text-[10px] text-rose-900 leading-snug font-medium">
  Welcome to India’s No.1 Satta Matka SMBoss.net platform. Get fast and accurate results for Kalyan, Main, Dadar, Milan, Rajdhani, and other markets. Daily free updates, guessing tips, and real-time market results are available. SMBoss App ensures the smoothest and fastest experience for all users.
</p>


  </CardContent>
</Card>




    </div>
  );
};

export default WelcomeSection;
