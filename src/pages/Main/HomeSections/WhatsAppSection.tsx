import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const WhatsAppSection = () => {
  return (
    <Card className="satta-card-outset p-0 overflow-hidden mt-2 bg-[#fecd66]">



      {/* Content */}
      <CardContent className="p-0 text-center px-2 py-2">
        <p className="text-[14px] font-bold text-black leading-[1.3]">
          कल्याण मॉर्निंग, श्रीदेवी मॉर्निंग, टाइम बाज़ार मॉर्निंग, रतन खत्री,
          मैन बाज़ार डे, मैन फटाफट, बॉम्बे राजश्री डे, नाइट टाइम बाज़ार,
          बॉम्बे राजश्री स्टारलाइन
          <br /><br />
          के ऑफलाइन व्यापार, बुकी लोग खाईवाल कटिंग के लिए मैसेज करो डायरेक्ट ऑफिस
        </p>

        {/* Button */}
        <div className="mt-[4px]">
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-[4px] text-white font-bold text-[12px] rounded-full border border-white"
            style={{
              background: "linear-gradient(to right, #a100ff, #ff0080)"
            }}
          >
            🎉 Join On WhatsApp
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default WhatsAppSection;