"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { tabItems } from "@/constants/tab-item";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutTabs = () => {
  const [activeTab, setActiveTab] = useState<string>(tabItems[0].id);

  return (
    <Tabs
      value={activeTab}
      onValueChange={(value) => setActiveTab(value)}
      className="w-full h-full flex flex-col items-center z-10"
    >
      <TabsList
        className="flex z-10 px-1 py-1 h-12 bg-gradient-to-br border from-slate-200 via-[#F5F3FC] 
      to-[#e9d5ff00] dark:from-black dark:via-slate-900 dark:to-slate-950 hover:scale-[101%] shadow-md
       rounded-full p-1 relative scrollbar-hide transition-all duration-100"
      >
        {tabItems.map((tab) => (
          <TabsTrigger
          key={tab.id}
          value={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className="relative px-2 md:px-6 py-2 text-sm sm:text-base cursor-pointer text-gray-600 rounded-full transition-all"
        >
          {activeTab === tab.id && (
            <motion.div
              layoutId="active-tab"
              className="absolute inset-0 bg-white dark:bg-gray-800 rounded-full shadow-md"
              transition={{ type: "spring", stiffness: 300, damping: 30 ,duration:0.6}}
            />
          )}
          <span className={cn(
            "relative z-10 transition-all",
            activeTab === tab.id ? "text-black dark:text-white font-medium" : "hover:text-gray-400"
          )}>
            {tab.label}
          </span>
        </TabsTrigger>
        ))}
        
      </TabsList>

      {tabItems.map((tab) => (
        <TabsContent
          key={tab.id}
          value={tab.id}
          className={cn(
            "mt-4 w-full max-w-8xl p-6 sm:p-14 rounded-4xl border border-gray-200 text-white bg-gradient-to-br from-slate-200 via-[#F5F3FC] to-[#e9d5ff00] dark:from-black dark:via-slate-900 dark:to-slate-950 hover:scale-[101%] shadow-md relative",
            activeTab === tab.id ? "block" : "hidden"
          )}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col items-start space-y-2 justify-evenly">
              <h4 className="text-black dark:text-white text-2xl sm:text-4xl font-medium text-start">{tab.title}</h4>
              <p className="text-black dark:text-white text-base sm:text-lg">{tab.label}</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm text-start sm:text-base">{tab.content}</p>
              <motion.ul
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
                >
                  {tab.list?.map((item) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: "easeOut",
                      }}
                      className="flex text-gray-800 dark:text-gray-400 items-center text-start gap-2 text-sm sm:text-base"
                    >
                      <span className="text-lg text-purple-500">✧</span>
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
            </div>

            <div className="flex items-center justify-center w-full">
              <Image
                alt={tab.label}
                src={tab.image}
                width={500}
                height={500}
                className="h-[250px] sm:h-[400px] w-full sm:w-[530px] object-cover shadow-md rounded-md"
              />
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default AboutTabs;
