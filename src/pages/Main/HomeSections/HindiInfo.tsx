import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const HindiInfo = () => {
  return (
    <Card className="bg-gradient-to-br from-amber-100 to-orange-100 border-2 border-amber-400 shadow-md">
      <CardContent className="py-4 text-center">
        <p className="font-black mb-2 text-orange-800 text-sm">Popular Markets</p>
        <p className="text-xs text-rose-800 leading-relaxed font-semibold">
          कल्याण मॉर्निंग, श्रीदेवी मॉर्निंग, टाइम बाजार मॉर्निंग, रत्न चक्की,
          मेन बाजार डे, मेन फ्लैट, बॉम्बे राजश्री डे, नाइट टाइम बाजार,
          बॉम्बे राजश्री स्टारलाइन
        </p>
      </CardContent>
    </Card>
  );
};

export default HindiInfo;
