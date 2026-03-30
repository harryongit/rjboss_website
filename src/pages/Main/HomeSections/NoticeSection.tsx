import React from "react";
import { Phone, MessageCircle } from "lucide-react";

const NoticeSection = () => {
  const countryCode = "+91";
  const phoneNumber = "";
  const fullNumber = `${countryCode}${phoneNumber}`;

  return (
    <div className="flex justify-center px-2 mt-2">

      <div className="w-full max-w-[400px] border-[2px] border-red-500 rounded-[15px] overflow-hidden bg-[#f3c08c]">

        {/* Header */}
        <div className="bg-red-600 text-white text-center font-bold text-[16px] py-1">
          ☆ NOTICE ☆
        </div>

        {/* Content */}
        <div className="text-center p-3">

          <p className="text-[14px] font-bold text-black leading-snug">
            अपना बाजार <span className="font-extrabold">rjboss.net</span> वेबसाइट में डलवाने
            के लिए आज ही हमें कॉल या WhatsApp करें
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-2 mt-2">

            {/* Call */}
            <a
              href={`tel:${fullNumber}`}
              className="flex items-center gap-1 px-3 py-[4px] bg-green-600 text-white text-[12px] font-bold rounded-[6px]"
            >
              <Phone className="w-3 h-3" />
              कॉल करें
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${countryCode.replace("+", "")}${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-[4px] bg-green-500 text-white text-[12px] font-bold rounded-[6px]"
            >
              <MessageCircle className="w-3 h-3" />
              WhatsApp करें
            </a>

          </div>

          {/* Email */}
          <p className="text-blue-700 font-bold text-[13px] mt-2">
            Email : support@rjboss.net
          </p>

          {/* Footer */}
          <p className="text-[13px] font-bold text-black mt-1">
            शर्ते लागु
          </p>

        </div>

      </div>

    </div>
  );
};

export default NoticeSection;