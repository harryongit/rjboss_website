import React from 'react';

const WhatsAppSection = () => {
  return (
    <div className="flex justify-center px-2 mt-2">
      
      <div className="w-full max-w-[400px] bg-[#fecd66] text-center rounded-[15px] border-[2px] border-red-500 p-3">
        
        <p className="text-[14px] font-bold text-black leading-snug">
          कल्याण मॉर्निंग, श्रीदेवी मॉर्निंग, टाइम बाज़ार मॉर्निंग, रतन खत्री,
          मैन बाज़ार डे, मैन फटाफट, बॉम्बे राजश्री डे, नाइट टाइम बाज़ार,
          बॉम्बे राजश्री स्टारलाइन
          <br /><br />
          के ऑफलाइन व्यापार, बुकी लोग खाईवाल कटिंग के लिए मैसेज करो डायरेक्ट ऑफिस
        </p>

        {/* Button */}
        <div className="mt-3 flex justify-center">
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-[5px] text-white font-bold text-[12px] rounded-full border border-white"
            style={{
              background: "linear-gradient(to right, #a100ff, #ff0080)"
            }}
          >
            🎉 JoinOnWhatsapp
          </a>
        </div>

      </div>

    </div>
  );
};

export default WhatsAppSection;