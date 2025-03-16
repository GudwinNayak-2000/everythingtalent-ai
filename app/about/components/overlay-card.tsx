import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  description: string;
};

const OverlayCard = ({ title, description }: Props) => {
  return (
    <div className="flex h-full w-full justify-center  items-center px-4 absolute top-0 lg:top-1/2 
     lg:-translate-y-1/2 left-0 lg:left-1/2 lg:-translate-x-1/2">
      <div className="border-2 gradient-border  max-w-5xl group rounded-3xl px-6 sm:px-10 md:px-12  overflow-hidden w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-[400px] flex justify-center items-center transform transition-all duration-700 ease-out opacity-80 scale-100 group dark:bg-gradient-to-r
       dark:from-[#1e0e24] dark:to-[#26161b] dark:bg-opacity-60 bg-gradient-to-r from-[#e9d5ff] to-[#bfdbfe] bg-opacity-60
       
       ">
        <div className="flex flex-col items-center justify-center space-y-4 z-50 backdrop-blur-xl px-4 py-12">
          <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white">
            {title}
            <span className="bg-gradient-to-r ml-2 from-pink-400 via-purple-400 to-yellow-400 bg-clip-text text-transparent">
              Mission
            </span>
          </h1>

          <p className="dark:text-gray-300 text-gray-900 text-lg text-center w-full">{description}</p>

          <Button className="bg-white cursor-pointer text-black px-6 w-[160px] h-10 font-medium rounded-md shadow-md hover:bg-gray-200 flex items-center gap-2">
            Start Here <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OverlayCard;
