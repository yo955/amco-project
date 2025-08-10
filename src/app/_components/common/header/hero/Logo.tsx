import React from "react";


interface LogoProps {
  src: string;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className, src }) => {
  return (
    <div className={`relative  flex justify-center items-center w-full h-full ${className}`}>
      <img
        src={src}
        alt="لوجو شركة آمكو"
        className="absolute object-cover z-50"
      />
    </div>
  );
};
