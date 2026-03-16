import React from "react";
import { Phone, MessageCircle, Mail } from "lucide-react";

const NoticeSection = () => {
  const countryCode = "+91";
  const phoneNumber = "";
  const fullNumber = `${countryCode}${phoneNumber}`;

  return (
    <div className="flex justify-center p-3 ">
      <div className="max-w-xl w-full rounded-xl border-2 border-red-600 bg-gradient-to-b from-orange-200 to-orange-300 shadow-lg overflow-hidden">

        {/* Header */}
        <div className="bg-red-600 text-white text-center font-black text-sm py-1 tracking-wide">
          ☆ NOTICE ☆
        </div>

        {/* Content */}
        <div className="text-center p-3 space-y-2">
          <p className="text-sm font-bold text-black leading-relaxed">
            अपना बाजार <span className="font-extrabold">spdpboss.net</span> वेबसाइट में डलवाने
            के लिए आज ही हमें कॉल या WhatsApp करें
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-3 mt-2 flex-wrap">

            {/* Call */}
            <a
              href={`tel:${fullNumber}`}
              className="flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-2 rounded-lg shadow-md transition"
            >
              <Phone className="w-4 h-4" />
              कॉल करें
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${countryCode.replace("+", "")}${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-2 rounded-lg shadow-md transition"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp करें
            </a>
          </div>

          {/* Email */}
          <div className="flex justify-center items-center mt-1">
            <a
              href="mailto:support@spdpboss.net"
              className="flex items-center gap-2 text-blue-700 font-bold hover:text-blue-900"
            >
              <Mail className="w-4 h-4" />
              Email : support@spdpboss.net
            </a>
          </div>

          <p className="text-sm font-bold text-black">शर्ते लागु</p>
        </div>
      </div>
    </div>
  );
};

export default NoticeSection;