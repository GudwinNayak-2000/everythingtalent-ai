"use client";
import HeroSection from "./pages/hero-section";
import HowWeThrive from "./pages/how-we-thrive";
import OurJourney from "./pages/our-journey";
import OurValues from "./pages/our-values";
import OurVision from "./pages/our-vision";
import StorySection from "./pages/story";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="mx-auto h-full w-full pt-20 lg:pt-28">
      <div className="mx-auto max-w-7xl h-full pb-20">
        <div className="absolute left-1/4 top-1/4 h-64 w-64 animate-[spin_20s_linear_infinite] rounded-full border border-black/20 dark:border-white/10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-black/20 dark:border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
        <motion.div
          className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 animate-[spin_25s_linear_infinite] rounded-full border border-black/20 dark:border-white/10"
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
      <div className="relative h-full z-10 w-full bg-gradient-to-br from-purple-50 via-pink-50 to-white dark:from-black dark:via-slate-900 dark:to-slate-950 py-8 sm:py-16 md:py-28 px-4 sm:px-6 lg:px-8">
        <OurVision />
        <div className="absolute inset-0 -z-10 h-auto w-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:25px_25px] [mask-image:radial-gradient(ellipse_100%_80%_at_50%_10%,#000_10%,transparent_100%)] before:absolute before:inset-0 before:z-10 before:bg-gradient-to-b before:from-[#1B1E2D]/10 before:via-[#1B1E2D]/20 before:to-[#1B1E2D]/40 after:absolute after:inset-0 after:bg-gradient-to-b after:from-transparent after:via-black/10 after:to-black/30 dark:[mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_60%,transparent_100%)]"></div>
      </div>

      <div className="relative z-10 h-full w-full bg-gradient-to-br from-purple-50 via-pink-50 to-white dark:from-black dark:via-slate-900 dark:to-slate-950 py-8 sm:py-16 md:py-28 px-4 sm:px-6 lg:px-8">
        <StorySection />
        <div className="absolute top-0 inset-0 -z-10 h-auto w-full bg-white bg-[radial-gradient(#0D0F2C_1px,transparent_1px)] opacity-70 [background-size:16px_16px] before:absolute before:inset-0 before:bg-gradient-to-t before:from-transparent before:to-white dark:bg-[#0D0F2C] dark:bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] dark:[background-size:20px_20px] dark:before:to-black"></div>
      </div>
      <div className="relative h-full w-full bg-gradient-to-br from-purple-50 via-pink-50 to-white dark:from-black dark:via-slate-900 dark:to-slate-950 py-8 sm:py-16 md:py-28 px-4 sm:px-6 lg:px-8">
        <OurValues />
      </div>
      <div className="relative h-full w-full bg-gradient-to-br from-purple-50 via-pink-50 to-white dark:from-black dark:via-slate-900 dark:to-slate-950 py-8 sm:py-16 md:py-28 px-4 sm:px-6 lg:px-8">
        <HowWeThrive/>
      </div>
      <div className="relative h-full w-full bg-gradient-to-br from-purple-50 via-pink-50 to-white dark:from-black dark:via-slate-900 dark:to-slate-950 py-8 sm:py-16 md:py-28 px-4 sm:px-6 lg:px-8">
        <OurJourney/>
      </div>
    </div>
  );
}
