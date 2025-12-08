import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const HindiFAQ = () => {
  return (
    <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-400 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-2">
        <CardTitle className="text-center text-sm font-black tracking-wide">🇮🇳 सामान्य प्रश्न (Hindi FAQ)</CardTitle>
      </CardHeader>
      <CardContent className="p-3">
        <div className="space-y-3 text-xs leading-relaxed">
          <div className="bg-white p-3 rounded-lg border border-orange-200">
            <p className="font-black text-orange-900 mb-1">सट्टा मटका क्या है?</p>
            <p className="text-gray-700">सट्टा मटका एक जुआ है जो भारत में उत्पन्न हुआ था, जिसमें मुंबई कॉटन एक्सचेंज की ओपनिंग और क्लोजिंग दरों पर सट्टा लगाई जाती थी।</p>
          </div>

          <div className="bg-white p-3 rounded-lg border border-orange-200">
            <p className="font-black text-orange-900 mb-1">सट्टा मटका कैसे खेलें?</p>
            <p className="text-gray-700">सट्टा मटका में खेलने के लिए आपको नंबर चुनना होता है और उन पर सट्टा लगाना होता है। खेल में विभिन्न प्रारूप होते हैं, जैसे कि सिंगल, जोड़ी, पन्ना, और संगम।</p>
          </div>

          <div className="bg-white p-3 rounded-lg border border-orange-200">
            <p className="font-black text-orange-900 mb-1">कल्याण मटका क्या होता है?</p>
            <p className="text-gray-700">कल्याण मटका एक प्रकार का सट्टा मटका बाजार है जो भारत में खेला जाता है। इसमें विभिन्न प्रकार की बेट लगाई जाती है जैसे कि ओपन, क्लोज, जोड़ियाँ आदि।</p>
          </div>

          <div className="bg-white p-3 rounded-lg border border-orange-200">
            <p className="font-black text-orange-900 mb-1">मटका के विशेष शब्द क्या है?</p>
            <p className="text-gray-700"><span className="font-bold">सिंगल:</span> 0 से 9 तक का एक अंक | <span className="font-bold">जोड़ी:</span> 00 से 99 तक दो अंक | <span className="font-bold">पट्टी/पन्ना:</span> तीन-अंकीय परिणाम</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HindiFAQ;
