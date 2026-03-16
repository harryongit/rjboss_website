import React from 'react';

const WhatsAppSection = () => {
  return (
    <div className="flex justify-center items-center p-4">
      <div className="max-w-xl text-center rounded-2xl border-2 border-red-500 p-4 shadow-lg">
        <p className="text-sm md:text-base font-semibold text-black leading-relaxed">
          कल्याण मॉर्निंग, श्रीदेवी मॉर्निंग, टाइम बाज़ार मॉर्निंग, रतन खत्री,
          मैन बाज़ार डे, मैन फटाफट, बॉम्बे राजश्री डे, नाइट टाइम बाज़ार,
          बॉम्बे राजश्री स्टारलाइन
          <br />
          के ऑफलाइन व्यापार, बुकी लोग खाईवाल कटिंग के लिए मैसेज करो डायरेक्ट ऑफिस
        </p>

        {/* WhatsApp Button */}
        <div className="mt-4 flex justify-center">
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-purple-700 hover:bg-purple-800 text-white font-bold px-6 py-2 rounded-full shadow-md transition-all"
          >
            🎉 JoinOnWhatsapp
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppSection;
