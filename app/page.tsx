"use client";
import { motion } from "framer-motion";
import HeroSection from "./about/pages/hero-section";
import OurVision from "./about/pages/our-vision";
import StorySection from "./about/pages/story";
import OurValues from "./about/pages/our-values";
import HowWeThrive from "./about/pages/how-we-thrive";
import OurJourney from "./about/pages/our-journey";
import OurMission from "./about/pages/our-mission";
export default function Page() {
  return (
    <div>
      <div className="bg-slate-100 dark:bg-slate-950">
        <div className="w-full h-full">
          <div className="mx-auto relative overflow-x-hidden w-full h-full pb-20">
            <div className="absolute left-1/4 top-1/4 h-64 w-64 animate-[spin_20s_linear_infinite] rounded-full border border-black/20 dark:border-white/10"></div>
            <div className="absolute hidden bottom-1/4 right-1/4 w-64 h-64 border border-black/20 dark:border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
            <motion.div
              className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 translate-y-1/2 md:-translate-y-1/2 animate-[spin_25s_linear_infinite] rounded-full border border-black/20 dark:border-white/10"
              animate={{
                x: ["-40%", "40%"],
                y: ["-40%", "40%"],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 8,
                ease: "easeInOut",
              }}
            />
            <HeroSection />
          </div>
          <div
            className="relative z-10 overflow-x-hidden h-full w-full bg-gradient-to-br from-purple-50 via-pink-50
to-white dark:from-black dark:via-slate-900 dark:to-slate-950 py-8 sm:py-16 md:py-28 px-4 sm:px-6 lg:px-8"
          >
            <OurVision />
            <div
              className="absolute inset-0 -z-10 h-auto w-full 
bg-[linear-gradient(to_right,#9CA3AF2e_1px,transparent_1px),linear-gradient(to_bottom,#9CA3AF2e_1px,transparent_1px)]
bg-[size:25px_25px] backdrop-blur-sm
[mask-image:radial-gradient(ellipse_100%_80%_at_50%_10%,#000_10%,transparent_100%)]

before:absolute before:inset-0 before:z-10 before:bg-gradient-to-b before:from-gray-400/10 before:via-gray-400/20 
before:to-gray-400/40 

after:absolute after:inset-0 after:bg-gradient-to-b after:from-transparent 
after:via-black/10 after:to-black/30 

dark:[mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_60%,transparent_100%)]"
            ></div>
          </div>

          <div
            className="relative overflow-x-hidden h-full w-full bg-gradient-to-br from-purple-50 via-pink-50 to-white dark:from-black
dark:via-slate-900 dark:to-slate-950 py-8 sm:py-16 md:py-28 px-4 sm:px-6 lg:px-8"
          >
            <StorySection />
            <div className="absolute inset-0 -z-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[#000000] dark:bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] dark:[background-size:20px_20px]  "></div>
          </div>
          <div
            className="relative overflow-x-hidden h-full w-full bg-gradient-to-br from-purple-50 via-pink-50 to-white dark:from-black
dark:via-slate-900 dark:to-slate-950 py-8 sm:py-16 md:py-28 px-4 sm:px-6 lg:px-8"
          >
            <OurValues />
          </div>
          <div
            className="relative overflow-x-hidden h-full w-full bg-gradient-to-br from-purple-50 via-pink-50 to-white dark:from-black
dark:via-slate-900 dark:to-slate-950 py-8 sm:py-16 md:py-28 px-4 sm:px-6 lg:px-8"
          >
            <HowWeThrive />
          </div>
          <div
            className="relative h-full w-full bg-gradient-to-br from-purple-50 via-pink-50 to-white dark:from-black
dark:via-slate-900 dark:to-slate-950 py-8 sm:py-16 md:py-28 px-4 sm:px-6 lg:px-8"
          >
            <OurJourney />
          </div>
          <div
            className="relative overflow-x-hidden h-full w-full bg-gradient-to-br from-purple-50 via-pink-50 to-white dark:from-black
dark:via-slate-900 dark:to-slate-950"
          >
            <OurMission />
          </div>
        </div>
      </div>
    </div>
  );
}
