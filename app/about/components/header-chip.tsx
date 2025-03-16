import React from "react";

interface ChipProps {
  text: string;
}

const HeaderChip: React.FC<ChipProps> = ({ text }) => {
  return (
    <div className="bg-[#f3f4f6] dark:bg-[#404040] flex items-center justify-center rounded-lg h-8 w-fit px-3 py-1">
      <span className="capitalize dark:text-white bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-semibold">{text}</span>
    </div>
  );
};

export default HeaderChip;
