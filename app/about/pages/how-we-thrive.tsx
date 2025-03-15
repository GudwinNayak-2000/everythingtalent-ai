import { thriveContent } from "@/constants/thrive-content";

import Image from "next/image";
import React from "react";
import StoryCard from "../components/story-card";
import InsightImage from "@/assets/images/insight-img-2.webp";
const HowWeThrive = () => {
  return (
    <section className="mx-auto max-w-7xl">
      <div className="grid grid-cols-2">
        <div>
          <Image
            src={InsightImage}
            alt="How We Thrive"
            width={560}
            height={500}
            className="rounded-2xl"
          />
        </div>
        <div className="flex flex-col space-y-8">
          <div className="inline-flex items-center gap-2">
            <h2 className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-5xl font-bold text-transparent">
              How
            </h2>
            <span className="bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 bg-clip-text text-5xl font-bold text-transparent">
              We
            </span>
            <span className="bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 bg-clip-text text-5xl font-bold text-transparent">
              Thrive
            </span>
          </div>
          <p>
            At Everything Talent, we break the norm. Driven by community, we
            empower individuals to innovate, learn, and push
            boundaries—fostering shared growth and a relentless pursuit of
            excellence.
          </p>
          <div>
            <div className="grid grid-cols-2 gap-4">
              {thriveContent.map((item) => (
                <StoryCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeThrive;
