import React from "react";
import rjboss from "@/assets/rjboss.png";

const HeaderLogo = () => {
  return (
    <div className="top-0 z-50">
      <div className="p-1 flex justify-center">

        <div className="border-[3px] border-red-500 rounded-[15px] px-6 py-3 bg-[#f3c08c] font-bold flex items-center justify-center gap-3 w-full max-w-[420px]">
          
          {/* Logo */}
          <img 
            src={rjboss?.src || rjboss} 
            alt="RJBOSS Logo" 
            className="h-12 w-auto"
          />

        

        </div>

      </div>
    </div>
  );
};

export default HeaderLogo;