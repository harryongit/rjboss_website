import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const KeywordsCard = ({ keywords }: { keywords: string[] }) => {
  return (
    <Card className="mt-3 bg-peach border-2 border-red-500 rounded-xl  shadow-sm">
      <CardContent className="py-3 px-3 text-center">
        <p className="text-xs md:text-sm text-blue-900 font-bold italic leading-relaxed uppercase">
          {keywords.join(" | ")}
        </p>
      </CardContent>
    </Card>
  );
};

const SPDPBossInfoSection = () => {
  const keywords = [
    "KALYAN MATKA",
    "MATKA RESULT",
    "KALYAN MATKA TIPS",
    "SATTA MATKA",
    "MATKA.COM",
    "MATKA PANA JODI TODAY",
    "BATTA SATKA",
    "MATKA PATTI JODI NUMBER",
    "MATKA RESULTS",
    "MATKA CHART",
    "MATKA JODI",
    "SATTA COM",
    "FULL RATE GAME",
    "MATKA GAME",
    "MATKA WAPKA",
    "ALL MATKA RESULT LIVE ONLINE",
    "MATKA RESULT",
    "KALYAN MATKA RESULT",
    "DPBOSS MATKA 143",
    "MAIN MATKA",
  ];

  return (
    <div className="space-y-3">
      <KeywordsCard keywords={keywords} />
    </div>
  );
};

export default SPDPBossInfoSection;