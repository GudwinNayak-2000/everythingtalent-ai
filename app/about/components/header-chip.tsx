import React from "react";

interface ChipProps {
  text: string;
}

const HeaderChip: React.FC<ChipProps> = ({ text }) => {
  return (
    <div className="bg-[#404040] flex items-center justify-center rounded-lg h-8 w-fit px-3 py-1">
      <span className="capitalize font-semibold">{text}</span>
    </div>
  );
};

export default HeaderChip;
