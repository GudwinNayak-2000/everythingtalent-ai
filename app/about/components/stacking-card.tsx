'use client';
import { ReactLenis } from 'lenis/react';
import { useTransform, motion, useScroll, MotionValue } from 'framer-motion';
import { useRef } from 'react';
import { stackingCardContent } from '@/constants/stacking-card-content';
import Image from 'next/image';


export default function StackingCard(){
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });
  return (
    <ReactLenis root>
      <main className='' ref={container}>
        <section className='text-white w-full '>
        {stackingCardContent.map((item, i) => {
            const targetScale = 1 - (stackingCardContent.length - i) * 0.05;
            return (
              <Card
                key={item.id}
                i={i}
                label={item.label}
                year={item.year}
                desc={item.desc}
                cardData={item.cardData}
                image={item.image}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>

      </main>
    </ReactLenis>
  );
}
interface CardProps {
  i: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  label: string;
  year: number;
  desc: string;
  cardData: { id: string; label: string; title: string }[];
  image: any;
}
export const Card: React.FC<CardProps> = ({
  i,
  label,
  year,
  desc,
  cardData,
  image,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="min-h-[900px] w-full flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={`flex flex-col shadow-xl bg-gradient-to-br from-slate-200 via-[#F5F3FC] to-[#e9d5ff00] dark:from-black dark:via-slate-900
           dark:to-slate-950 relative -top-[25%] h-[600px] w-[100%] rounded-2xl p-6 md:p-10 origin-top`}
      >
        <div className={`inline-flex gap-8 h-full w-full items-start justify-start`}>
          <div className={`relative md:w-[40%] w-full h-full flex flex-col items-start justify-start gap-2`}>
            <p className="text-sm text-[#983EEA] font-medium">{label}</p>
            <h2 className="text-3xl text-black font-bold dark:text-gray-300">{year}</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm md:text-lg mt-2">{desc}</p>
            <div className="flex flex-wrap gap-4 mt-4">
              {cardData.map((data) => (
                <div key={data.id} className="p-3 bg-gray-800 rounded-lg flex flex-col items-start w-[200px]">
                  <p className="text-2xl font-semibold">{data.label}</p>
                  <p className="text-sm">{data.title}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div
            className={`relative w-[60%] hidden md:flex h-full rounded-lg overflow-hidden`}
          >
            <motion.div
              className={`w-full h-full`}
              style={{ scale: imageScale }}
            >
              <Image src={image} alt={label} fill className="object-cover h-full" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};