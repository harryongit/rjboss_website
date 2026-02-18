import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SPDPBossInfoPage = () => {
  return (
    <div className="space-y-6 max-w-4xl mx-auto my-6 px-4">
      {/* Introduction Section */}
      <Card className="bg-white border-2 border-indigo-400 shadow-lg ">
        <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2">
          <CardTitle className="text-center text-sm font-black tracking-wide">
            📖 ABOUT SPDPBOSS SERVICE
          </CardTitle>
        </CardHeader>
        <CardContent className="p-3 max-h-[450px] overflow-y-auto">
          <div className="space-y-3 text-xs text-gray-700 leading-relaxed">
            <p className="font-semibold text-indigo-900">
              Welcome to SPDPBoss, where entertainment takes center stage!
            </p>
            <p>
              SPDPBoss.Service is your ultimate destination for everything related to the fascinating world of Satta Matka. As a leading authority in the Matka Games industry, we provide accurate Matka results, tips, and expert guidance to help players make informed decisions.
            </p>
            <p>
              Whether you are a pro or a newcomer, our resources like Kalyan Matka, Matka Result, and Mumbai Matka offer a thrilling and immersive experience.
            </p>

            {/* Types of Satta Matka */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-3 rounded-lg border border-amber-300 mt-3">
              <p className="font-bold text-orange-800 mb-2">🎯 TYPES OF SATTA MATKA</p>
              <ul className="space-y-1 text-xs">
                <li>• <span className="font-bold">Kalyan Matka:</span> Popular variant based on cotton exchange rates.</li>
                <li>• <span className="font-bold">Mumbai Matka:</span> Format associated with Mumbai city.</li>
                <li>• <span className="font-bold">Rajdhani Matka:</span> Based on Rajdhani Cotton Exchange.</li>
                <li>• <span className="font-bold">Night Milan Matka:</span> Evening/night hours variant.</li>
                <li>• <span className="font-bold">Main Mumbai Matka:</span> Focused on Mumbai market.</li>
                <li>• <span className="font-bold">Desawar Matka:</span> Variant played in smaller towns for local players.</li>
                <li>• <span className="font-bold">Sangam Matka:</span> Combines results from two different Matka markets.</li>
                <li>• <span className="font-bold">Kuber Matka:</span> Known for high-stakes betting.</li>
              </ul>
            </div>

            {/* Game Formats */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-3 rounded-lg border border-blue-300 mt-3">
              <p className="font-bold text-blue-800 mb-2">📊 GAME FORMATS</p>
              <ul className="space-y-1 text-xs">
                <li>• <span className="font-bold">Single:</span> Bet on a single digit from 0 to 9.</li>
                <li>• <span className="font-bold">Jodi:</span> Two numbers forming a pair (00 to 99).</li>
                <li>• <span className="font-bold">Patti:</span> Three-digit number variant.</li>
                <li>• <span className="font-bold">Half Sangam:</span> One number from each set.</li>
                <li>• <span className="font-bold">Full Sangam:</span> Two numbers from both sets.</li>
                <li>• <span className="font-bold">Panel Chart:</span> Graphical representation of past results for strategy.</li>
                <li>• <span className="font-bold">Cycle Bets:</span> Betting on repeated patterns to improve odds.</li>
              </ul>
            </div>

            {/* Tips for Players */}
            <div className="bg-gradient-to-br from-green-50 to-lime-50 p-3 rounded-lg border border-green-300 mt-3">
              <p className="font-bold text-green-800 mb-2">💡 TIPS FOR PLAYERS</p>
              <ul className="space-y-1 text-xs">
                <li>• Always check previous results and trends before placing bets.</li>
                <li>• Start with smaller bets to understand patterns and improve strategies.</li>
                <li>• Use charts and historical data to identify high-probability numbers.</li>
                <li>• Manage your bankroll carefully to avoid unnecessary losses.</li>
                <li>• Stay updated with trusted platforms like SPDPBoss for accurate tips.</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* FAQ Section */}
     <Card className="bg-white border-2 border-indigo-400 shadow-lg">
  <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2">
    <CardTitle className="text-center text-sm font-black tracking-wide">
      ❓ FREQUENTLY ASKED QUESTIONS / अक्सर पूछे जाने वाले प्रश्न
    </CardTitle>
  </CardHeader>
  <CardContent className="p-3 max-h-[450px] overflow-y-auto">
    <div className="space-y-3">
      {[
        {
          question: "What is Satta Matka?",
          questionHindi: "सट्टा मटका क्या है?",
          answer: "Satta Matka originated in India and is one of the popular forms of lottery and gambling games involving betting on numbers.",
          answerHindi: "सट्टा मटका भारत में उत्पन्न हुआ और यह नंबर पर सट्टा लगाने वाले लोकप्रिय लॉटरी और जुआ खेलों में से एक है।",
        },
        {
          question: "Who is SPDPBoss?",
          questionHindi: "SPDPBoss कौन है?",
          answer: "SPDPBoss is known for providing the best tips and guidance to players along with expert advice for informed decisions.",
          answerHindi: "SPDPBoss खिलाड़ियों को सर्वश्रेष्ठ सुझाव और मार्गदर्शन प्रदान करने के लिए जाना जाता है।",
        },
        {
          question: "What is Kalyan Matka?",
          questionHindi: "कल्याण मटका क्या है?",
          answer: "Kalyan Matka is a variant of Satta Matka focusing on games based on opening and closing rates of cotton in the Bombay Cotton Exchange.",
          answerHindi: "कल्याण मटका सट्टा मटका का एक प्रकार है जो बॉम्बे कॉटन एक्सचेंज में कपास की ओपनिंग और क्लोजिंग दरों पर आधारित खेलों पर केंद्रित है।",
        },
        {
          question: "How can I check Matka Result?",
          questionHindi: "मैं मटका रिजल्ट कैसे चेक कर सकता हूँ?",
          answer: "Matka results can be checked through various online platforms or websites dedicated to Satta Matka games.",
          answerHindi: "मटका रिजल्ट विभिन्न ऑनलाइन प्लेटफ़ॉर्म या सट्टा मटका खेलों के लिए समर्पित वेबसाइटों के माध्यम से चेक किए जा सकते हैं।",
        },
        {
          question: "What is Matka Chart?",
          questionHindi: "मटका चार्ट क्या है?",
          answer: "The Matka Chart refers to graphical representation of previous results and trends which helps players analyze patterns.",
          answerHindi: "मटका चार्ट पिछले परिणामों और रुझानों का ग्राफिकल प्रतिनिधित्व है जो खिलाड़ियों को पैटर्न विश्लेषण में मदद करता है।",
        },
        {
          question: "Is Satta Matka legal?",
          questionHindi: "क्या सट्टा मटका कानूनी है?",
          answer: "Satta Matka is considered illegal in India in most states, but some online platforms operate under license in controlled environments.",
          answerHindi: "भारत में अधिकांश राज्यों में सट्टा मटका अवैध माना जाता है, लेकिन कुछ ऑनलाइन प्लेटफ़ॉर्म लाइसेंस के तहत नियंत्रित वातावरण में संचालित होते हैं।",
        },
        {
          question: "Can beginners play Matka?",
          questionHindi: "क्या शुरुआती मटका खेल सकते हैं?",
          answer: "Yes, beginners can play Matka, but it’s recommended to start with small bets and study patterns before playing big.",
          answerHindi: "हाँ, शुरुआती मटका खेल सकते हैं, लेकिन यह सलाह दी जाती है कि छोटे दांव से शुरू करें और बड़े दांव लगाने से पहले पैटर्न का अध्ययन करें।",
        },
        {
          question: "What are Jodi and Patti in Matka?",
          questionHindi: "मटका में जोड़ी और पत्ती क्या हैं?",
          answer: "Jodi is a pair of numbers (00-99) and Patti is a three-digit combination. Both are popular formats in betting.",
          answerHindi: "जोड़ी दो अंकों का एक सेट (00-99) है और पत्ती तीन अंकों का संयोजन है। दोनों सट्टेबाजी में लोकप्रिय प्रारूप हैं।",
        },
        {
          question: "How often are results declared?",
          questionHindi: "रिजल्ट कितनी बार घोषित किए जाते हैं?",
          answer: "Results are declared multiple times a day depending on the Matka type, e.g., Kalyan Matka has evening draws.",
          answerHindi: "रिजल्ट मटका प्रकार के आधार पर दिन में कई बार घोषित किए जाते हैं, उदाहरण के लिए, कल्याण मटका में शाम के ड्रा होते हैं।",
        },
        {
          question: "Where can I find expert tips?",
          questionHindi: "मुझे विशेषज्ञ सुझाव कहाँ मिल सकते हैं?",
          answer: "SPDPBoss provides tips, strategies, and daily updates for players to make informed decisions.",
          answerHindi: "SPDPBoss खिलाड़ियों को जानकार निर्णय लेने के लिए टिप्स, रणनीतियाँ और दैनिक अपडेट प्रदान करता है।",
        },
      ].map((faq, index) => (
        <div
          key={index}
          className="bg-gradient-to-br from-purple-50 to-pink-50 p-3 rounded-lg border border-purple-200"
        >
          <p className="font-black text-xs text-purple-900 mb-1">
            Q: {faq.question} / {faq.questionHindi}
          </p>
          <p className="text-xs text-gray-700">
            {faq.answer} / {faq.answerHindi}
          </p>
        </div>
      ))}
    </div>
  </CardContent>
</Card>

    </div>
  );
};

export default SPDPBossInfoPage;
