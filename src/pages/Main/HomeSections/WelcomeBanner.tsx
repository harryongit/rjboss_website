import React from "react";
import laxmiDevi from "@/assets/laxmi-devi1.jpg";

const WelcomeBanner = () => {
  return (
    <div className="flex justify-center px-3 mt-2">

      <div className="w-full max-w-[420px] border-[3px] border-red-500 rounded-[15px] bg-[#f3c08c] p-2 flex items-center">

        {/* Image */}
        <img
          src={laxmiDevi}
          alt="Laxmi Devi"
          className="w-[80px] h-[80px] rounded-[10px] border border-red-500 mr-2 object-contain bg-white"
        />

        {/* Text */}
        <div className="leading-tight">
          <p className="font-bold italic text-sm">
            !! Welcome to rjboss international !!
          </p>
          <p className="font-bold italic text-sm">
            !! Satta Matka Fast Result
          </p>
        </div>

      </div>

    </div>
  );
};

export default WelcomeBanner;