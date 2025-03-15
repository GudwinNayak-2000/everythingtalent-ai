import React from "react";

const cards = [
  { id: 1, text: "With us, there are no surprises—just straight talk and genuine commitment.", tag: "#HONESTY", color: "bg-yellow-400", size: "" },
  { id: 2, text: "Embrace hard work", tag: "#HARDWORK", color: "bg-orange-400", size: "col-span-2" },
  { id: 3, text: "We act with urgency to ensure progress and deliver results efficiently. Every moment matters.", tag: "#URGENCY", color: "bg-purple-500", size: "" },
  { id: 4, text: "Grow 1% every day", tag: "#GROWTHMINDSET", color: "bg-green-300", size: "" },
  { id: 5, text: "We’re here to help you aim higher, break limits, and achieve what others might think impossible.", tag: "#ASPIRATION", color: "bg-lime-400", size: "" },
  { id: 6, text: "DO HARD THINGS", tag: "#RESILIENT", color: "bg-gray-300 text-gray-700 font-bold", size: "col-span-2 row-span-1 text-xl" },
  { id: 7, text: "We value fresh ideas, bold solutions, and the freedom to imagine what’s next.", tag: "#CREATIVITY", color: "bg-red-300", size: "" },
  { id: 8, text: "Commit to continuous learning and improvement", tag: "#LEARNING", color: "bg-blue-300", size: "col-span-2" },
  { id: 9, text: "Build trust through actions, not just words.", tag: "#TRUST", color: "bg-red-400", size: "" },
  { id: 10, text: "Every project, every solution we create is aimed at contributing to something greater.", tag: "#CONTRIBUTION", color: "bg-yellow-400", size: "col-span-2" },
];

const MasonryGrid = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-auto">
        {cards.map((card) => (
          <div key={card.id} className={`p-4 rounded-lg shadow ${card.color} ${card.size}`}>
            <p className="font-semibold">{card.text}</p>
            <span className="text-sm opacity-70">{card.tag}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MasonryGrid;
