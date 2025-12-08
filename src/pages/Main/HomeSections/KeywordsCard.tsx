import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

// Notice card with animated gradient
const AnimatedNoticeCard = () => {
  return (
    <Card className="relative overflow-hidden rounded-xl border-2 border-blue-400 shadow-md">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-[length:400%_400%] animate-gradientShift z-0"></div>
      
      <CardContent className="py-3 text-center relative z-10">
        <p className="text-sm text-white font-bold leading-relaxed">
          Yeh he SMBoss ki ekmatra original website hain. Hamare jaise design ke bahut saare websites market mein hain. Kisi par bhi bharosa na kare. Yehi world famous ekmatra SMBoss website hain. Kisi par bhi SMBoss samajh ke result na dalvaye.
        </p>
      </CardContent>
    </Card>
  );
};

const KeywordsCard = ({ keywords }: { keywords: string[] }) => {
  return (
    <Card className="bg-white border-2 border-gray-300 shadow-sm rounded-xl mt-3">
      <CardContent className="py-3 text-center">
        <p className="text-xs text-gray-700 leading-relaxed font-medium">
          {keywords.join(' | ')}
        </p>
      </CardContent>
    </Card>
  );
};

const SMBossInfoSection = () => {
  const keywords = [
    'SATTA MATKA', 'SMBoss SATTA MATKA', 'MATKA RESULT', 'KALYAN MATKA TIPS',
    'SATTA MATKA', 'MATKA.COM', 'MATKA PANA JODI TODAY', 'BATTA SATKA',
    'MATKA PATTI JODI NUMBER', 'MATKA RESULTS', 'MATKA CHART', 'MATKA JODI',
    'SATTA COM', 'SMBoss SPBOSS', 'MATKA GAME', 'MATKA WAPKA', 'SMBoss TOP NO1',
    'MATKA RESULT', 'KALYAN MATKA RESULT', 'SMBoss MATKA 143'
  ];

  return (
    <div className="space-y-3">
      <AnimatedNoticeCard />
      <KeywordsCard keywords={keywords} />
    </div>
  );
};

export default SMBossInfoSection;
