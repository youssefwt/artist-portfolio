// "use client";

import { motion } from "framer-motion";
import { Noto_Serif_JP } from "next/font/google";

import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { HeroImage } from "@/components/hero/HeroImage";
import Social from "./Social";
const japanese = Noto_Serif_JP({ subsets: ["latin"], weight: "400" });

export function Hero() {
  return (
    <AuroraBackground className=" rounded-bl-[100px] h-[90%]">
      <div
        // initial={{ opacity: 0.0, y: 40 }}
        // whileInView={{ opacity: 1, y: 0 }}
        // transition={{
        //   delay: 0.3,
        //   duration: 0.8,
        //   ease: "easeInOut",
        // }}
        className="relative flex flex-col-reverse md:flex-row gap-3 items-center py-10 md:py-16 justify-evenly w-full"
      >
        <div className="w-[90%] md:w-[50%] font-bold dark:text-white text-center justify-evenly h-[400px] md:h-[500px] flex flex-col relative gap-9">
          <div className="text-lg md:text-4xl space-y-5">
            <h2 className="md:text-start">Welcome to My Artistic Journey</h2>
            <p>
              Dive into Ereny's vibrant world of colors and creativity. As an
              emerging artist, I invite you to explore my evolving portfolio,
              where each brushstroke tells a story of passion, discovery, and
              growth. My work is a reflection of my journey as an artist,
              capturing the essence of life's beauty and complexity through
              various mediums and styles.
            </p>
          </div>
          <div className="dark:text-white text-center self-center">
            <Social />
            <p className={`${japanese.className}`}>エジプトのアジア人</p>
          </div>
        </div>
        <HeroImage />
      </div>
    </AuroraBackground>
  );
}
