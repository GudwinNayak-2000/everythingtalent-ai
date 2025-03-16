import React from "react";
import StoryCard from "../components/story-card";
import { storyContent } from "@/constants/story-content";
import Image from "next/image";
import { motion } from "framer-motion";
import OurStory from "@/assets/images/our-story.svg";
const StorySection = () => {
  return (
    <section className="z-10 relative bg-transparent">
      <div className="grid grid-cols-1 md:grid-cols-2 md:max-w-7xl mx-auto justify-items-center items-center py-10">
        <div className="flex flex-col justify-center space-y-6 h-full">
          <h2 className="text-5xl font-bold">The <span className="bg-gradient-to-r from-fuchsia-500 via-blue-500 to-amber-400 bg-clip-text text-transparent">Story</span> Behind Us</h2>
          <p className="text-lg max-w-xl">
            It all started with one question: What if hiring didn't have to feel
            like gambling on a hunch?
          </p>
          <div className="grid grid-cols-2 gap-6 max-w-xl">
            {storyContent.map((item) => (
              <StoryCard key={item.id} item={item} />
            ))}
          </div>
        </div>
        <div className="relative hidden md:flex h-[500px] overflow-hidden rounded-2xl">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Image
              alt="our-story"
              src={OurStory}
              width={500}
              height={500}
              className="h-[500px] w-[500px] shadow-md object-contain rounded-md"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
