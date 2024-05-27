"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { HeroImage } from "@/components/hero/HeroImage";
import Social from "./Social";
export function Hero() {
  return (
    <AuroraBackground className=" rounded-bl-[100px] h-[90%] ">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col-reverse md:flex-row gap-3 items-center py-10 md:py-16 justify-evenly w-full"
      >
        <div className=" w-[50%] font-bold dark:text-white text-center justify-evenly h-[400px] md:h-[500px] flex flex-col relative gap-9">
          <p className="text-lg md:text-4xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            temporibus quas perspiciatis. Esse repellat nihil tenetur, molestias
            quisquam excepturi voluptatum perferendis illum corrupti maxime
            distinctio. Cupiditate possimus quidem doloribus recusandae.
          </p>
          <div className="dark:text-white text-center self-center">
            <Social />
          </div>
        </div>
        <HeroImage />
      </motion.div>
    </AuroraBackground>
  );
}
