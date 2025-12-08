import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const IntroductionSection = () => {
  return (
    <Card className="bg-white border-2 border-indigo-400 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2">
        <CardTitle className="text-center text-sm font-black tracking-wide">📖 ABOUT SMBoss SERVICE</CardTitle>
      </CardHeader>
      <CardContent className="p-3">
        <div className="space-y-3 text-xs text-gray-700 leading-relaxed">
          <p className="font-semibold text-indigo-900">Welcome to SMBoss, where entertainment takes center stage!</p>
          <p>SMBoss.Service is your ultimate destination for everything related to the fascinating world of the Satta Matka. As the SMBoss is a leading authority in the realm of Matka Games, this is your Go-To Platform for any reliable information along with accurate Matka Results and expert guidance.</p>
          <p>Whether you are a pro or a newcomer player the comprehensive collection of resources such as Kalyan Matka, Matka Result, and Mumbai Matka, will provide you with the thrilling and immersive experience.</p>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-3 rounded-lg border border-amber-300 mt-3">
            <p className="font-bold text-orange-800 mb-2">🎯 TYPES OF SATTA MATKA</p>
            <ul className="space-y-1 text-xs">
              <li>• <span className="font-bold">Kalyan Matka:</span> Popular variant based on cotton exchange rates</li>
              <li>• <span className="font-bold">Mumbai Matka:</span> Format associated with Mumbai city</li>
              <li>• <span className="font-bold">Rajdhani Matka:</span> Based on Rajdhani Cotton Exchange</li>
              <li>• <span className="font-bold">Night Milan Matka:</span> Evening/night hours variant</li>
              <li>• <span className="font-bold">Main Mumbai Matka:</span> Focused on Mumbai market</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-3 rounded-lg border border-blue-300 mt-3">
            <p className="font-bold text-blue-800 mb-2">📊 GAME FORMAT</p>
            <ul className="space-y-1 text-xs">
              <li>• <span className="font-bold">Single:</span> Bet on single digit from 0 to 9</li>
              <li>• <span className="font-bold">Jodi:</span> Two numbers forming pair (00 to 99)</li>
              <li>• <span className="font-bold">Patti:</span> Three-digit number variant</li>
              <li>• <span className="font-bold">Half Sangam:</span> Combination of one number from each set</li>
              <li>• <span className="font-bold">Full Sangam:</span> Two numbers from both sets</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default IntroductionSection;
