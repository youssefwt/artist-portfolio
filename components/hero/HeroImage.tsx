"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import heroPortrait from "@/public/hero-portrait-1.png";

export function HeroImage() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card w-auto md:w-[22rem] h-auto">
        <CardItem translateZ="100" className="md:w-full mt-4 ">
          <Image
            className="w-36 md:w-full rounded-full image-filter "
            src={heroPortrait}
            alt="Picture of the author"
            priority
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
