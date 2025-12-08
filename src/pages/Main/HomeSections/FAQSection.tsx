import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const FAQSection = () => {
  return (
    <Card className="bg-white border-2 border-purple-400 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2">
        <CardTitle className="text-center text-sm font-black tracking-wide">❓ FREQUENTLY ASKED QUESTIONS</CardTitle>
      </CardHeader>
      <CardContent className="p-3">
        <div className="space-y-3">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-3 rounded-lg border border-purple-200">
            <p className="font-black text-xs text-purple-900 mb-1">Q: What is Satta Matka?</p>
            <p className="text-xs text-gray-700">Satta Matka originated in India and is one of the popular forms of Lottery and gambling games involving betting on numbers.</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-3 rounded-lg border border-purple-200">
            <p className="font-black text-xs text-purple-900 mb-1">Q: Who is SMBoss?</p>
            <p className="text-xs text-gray-700">SMBoss is known for providing the best tips and guidance to players along with expert advice for informed decisions.</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-3 rounded-lg border border-purple-200">
            <p className="font-black text-xs text-purple-900 mb-1">Q: What is Kalyan Matka?</p>
            <p className="text-xs text-gray-700">Kalyan Matka is a variant of Satta Matka focusing on games based on opening and closing rates of cotton in the Bombay Cotton Exchange.</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-3 rounded-lg border border-purple-200">
            <p className="font-black text-xs text-purple-900 mb-1">Q: How can I check Matka Result?</p>
            <p className="text-xs text-gray-700">Matka results can be checked through various online platforms or websites dedicated to Satta Matka games.</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-3 rounded-lg border border-purple-200">
            <p className="font-black text-xs text-purple-900 mb-1">Q: What is Matka Chart?</p>
            <p className="text-xs text-gray-700">The Matka Chart refers to graphical representation of previous results and trends which helps players analyze patterns.</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FAQSection;
