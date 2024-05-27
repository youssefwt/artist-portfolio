"use client";

import Image from "next/image";
import { Tabs } from "../ui/tabs";
import heroPortrait from "@/assets/hero-portrait.png";
import { PaintingsGallery } from "./Gallery";
import { Boxes } from "../ui/background-boxes";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
//
export function Showcase() {
  const tabs = [
    {
      title: "Paintings",
      value: "paintings",
      content: (
        <div className="w-full overflow-y-auto relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-custom-gradient items-center">
          <PaintingsGallery />
        </div>
      ),
    },
    {
      title: "Crafts",
      value: "crafts",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-custom-gradient ">
          <p>Crafts</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Lifestyle",
      value: "lifestyle",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-custom-gradient">
          <p>Lifestyle</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[95%] [perspective:1000px] relative b flex flex-col max-w-7xl mx-auto w-full  items-start justify-start mb-10 ">
      <Tabs
        containerClassName="justify-center md:justify-start"
        tabs={tabs}
        contentClassName="my-0 overflow-y-auto"
        tabClassName="mt-6 md:mt-0 "
      />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      <Image
        src={heroPortrait}
        alt="dummy image"
        width="300"
        height="300"
        className="z-50 relative"
        //   className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
      />
    </>
  );
};
