"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import heroPortrait from "@/assets/hero-portrait.png";

export function HeroImage() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card w-auto sm:w-[20rem] h-auto">
        <CardItem translateZ="100" className="w-36 md:w-full mt-4 ">
          <Image
            className="w-full rounded-full image-filter"
            src={heroPortrait}
            alt="Picture of the author"
            width={320}
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
