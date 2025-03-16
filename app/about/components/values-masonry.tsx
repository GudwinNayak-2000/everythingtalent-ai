import React from "react";
import { Bot } from "lucide-react";
import Typewriter from "./typewriter";

const cards = [
  {
    id: "01",
    text: "With us, there are no surprises—just straight talk and genuine commitment.",
    tag: "#HONESTY",
    color: "bg-yellow-400",
    size: "col-span-3 lg:col-span-1",
    className: "font-bold text-2xl",
    numberClass: "",
    tagClass: "",
  },
  {
    id: "03",
    text: "We act with urgency to ensure progress and deliver results efficiently. Every moment matters.",
    tag: "#URGENCY",
    color: "bg-purple-500",
    size: "col-span-3 lg:col-span-2",
    className: "text-2xl text-white font-semibold",
    numberClass: "font-semibold text-2xl text-[#4F357D]",
    tagClass: "",
  },
  {
    id: "02",
    icon: <Bot size={42} />,
    text: "Embrace hard work",
    tag: "#HARDWORK #DEDICATION",
    color: "bg-orange-400",
    size: "col-span-3 lg:col-span-1",
    className: "text-2xl font-bold",
    numberClass: "",
    tagClass: "text-lg",
  },
  {
    id: "05",
    text: "We’re here to help you aim higher, break limits, and achieve what others might think impossible.",
    tag: "#ASPIRATION",
    color: "bg-lime-400",
    size: "col-span-3 lg:col-span-2",
    className: "text-xl font-bold",
    numberClass: "",
    tagClass: "text-end",
  },
  {
    id: "06",
    text: "DO HARD THINGS",
    tag: "#RESILIENT",
    color: "bg-gray-300 text-gray-700 font-bold",
    size: "col-span-3 lg:col-span-2",
    className: "drop-shadow-lg text-2xl",
    numberClass: "",
    tagClass: "",
  },
  {
    id: "04",
    text: "Grow 1% every day",
    tag: "#GROWTHMINDSET",
    color: "bg-green-300",
    size: "col-span-3 lg:col-span-1",
    className: "",
    numberClass: "",
    tagClass: "",
  },
  {
    id: "07",
    text: "We value fresh ideas, bold solutions, and the freedom to imagine what’s next.",
    tag: "#CREATIVITY",
    color: "bg-red-300",
    size: "col-span-3 lg:col-span-1",
    className: "",
    numberClass: "",
    tagClass: "",
  },
  {
    id: "08",
    text: "Commit to continuous learning and improvement",
    tag: "#LEARNING",
    color: "bg-blue-300",
    size: "col-span-3 lg:col-span-2",
    className: "",
    numberClass: "",
    tagClass: "",
  },
  {
    id: "09",
    text: "Build trust through actions, not just words.",
    tag: "#TRUST",
    color: "bg-red-400",
    size: "col-span-3 lg:col-span-2",
    className: "",
    numberClass: "",
    tagClass: "",
  },
  {
    id: "10",
    text: "Every project, every solution we create is aimed at contributing to something greater.",
    tag: "#CONTRIBUTION",
    color: "bg-yellow-400",
    size: "col-span-3 lg:col-span-2",
    className: "",
    numberClass: "",
    tagClass: "",
  },
];

const MasonryGrid = () => {
  return (
    <div className="lg:max-w-7xl mx-auto lg:p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-auto">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`p-4 flex flex-col rounded-lg shadow ${card.color} ${card.size}`}
          >
            {card.icon}
            <span className={`${card.numberClass}`}>{card.id}</span>
            <p className={`${card.className} w-full`}>{card.text}</p>
            {card.id === "02" && card.tag ? (
              <Typewriter text={String(card.tag).trim()} speed={100}/>
            ) : (
              <span className={`${card.tagClass} text-sm opacity-70 w-full`}>
                {card.tag || ""}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MasonryGrid;
