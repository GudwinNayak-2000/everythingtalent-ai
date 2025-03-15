"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { tabItems } from "@/constants/tab-item";
import Image from "next/image";

const AboutTabs = () => {
  const [activeTab, setActiveTab] = useState<string>(tabItems[0].id);

  return (
    <Tabs value={activeTab} onValueChange={(value)=>setActiveTab(value)} className="w-full flex flex-col items-center">
      <TabsList className="inline-flex px-1 py-1 h-12 bg-gradient-to-br border from-slate-200 via-[#F5F3FC] 
      to-[#e9d5ff00] dark:from-black dark:via-slate-900 dark:to-slate-950 hover:scale-[101%] shadow-md
       rounded-full p-1 relative max-sm:hidden">
        {tabItems.map((tab) => (
          <TabsTrigger
            key={tab.id}
            value={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "px-8 py-3 cursor-pointer text-gray-600 rounded-full transition-all",
              activeTab === tab.id
                ? "!bg-white !text-black font-medium" 
                : "hover:text-gray-400 transition-all duration-300"
            )}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabItems.map((tab) => (
        <TabsContent
          key={tab.id}
          value={tab.id}
          className={cn(
            "mt-4 w-full max-w-8xl p-14 rounded-2xl border border-gray-700 text-white inline-flex bg-gradient-to-br from-slate-200 via-[#F5F3FC] to-[#e9d5ff00] dark:from-black dark:via-slate-900 dark:to-slate-950 hover:scale-[101%] shadow-md relative max-sm:hidden",
            activeTab === tab.id ? "block" : "hidden"
          )}
        >
          <div className="grid grid-cols-2">
            <div className="flex flex-col space-y-2 justify-evenly">
              <h4 className="text-4xl font-medium max-w-lg">{tab.title}</h4>
              <p className="text-lg">{tab.label}</p>
              <p className="text-gray-600">{tab.content}</p>
              <ul>
                {tab.list?.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                     <span className="text-lg text-purple-500">✧</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-center h-full w-full">
              <Image alt={tab.label} src={tab.image} width={500} height={500} className="h-[400px] w-[530px] shadow-md rounded-md"/>
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default AboutTabs;
