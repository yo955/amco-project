import React from "react";
import { Noto_Kufi_Arabic } from "next/font/google";

const kufi = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  weight: ["400", "700"],
  display: "swap",
});

interface TextProps {
  className?: string;
}

export const Text: React.FC<TextProps> = ({ className = "" }) => {
  return (
    <div className={`${kufi.className} ${className}`}>
      <div className="flex flex-col items-center text-center h-full space-y-0">
        {/* الشعار: عربي + إنجليزي */}
        <div className="flex items-center gap-4">
          <h1 className="text-[1.7rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3.7rem] text-primary font-bold tracking-wide lg:tracking-[0.08rem]">
            آمـــ<span className="text-white">گــــ</span>و
          </h1>
          <h1 className="text-[1.7rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3.7rem] text-primary tracking-[0.2rem] md:tracking-[0.5rem] lg:tracking-[0.2rem] font-semibold">
            AM<span className="text-white">C</span>O
          </h1>
        </div>

        {/* النص العربي */}
        <p className="text-base sm:text-lg text-primary font-semibold">
          شركة اســـــاد النموذجية
        </p>

        {/* النص الإنجليزي */}
        <p className="text-sm sm:text-base text-gray-400 font-medium">Asad Model Company</p>
      </div>
    </div>
  );
};
