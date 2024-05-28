"use client";
import React, { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

const MobileGallery = ({ images }: { images: string[] }) => {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <div className="grid gap-10 md:hidden">
        {images.map((el, idx) => (
          <Image
            onClick={() => {
              setIndex(images.findIndex((elm) => elm === el));
            }}
            src={el}
            className="h-80 w-full object-contain rounded-lg gap-10 !m-0 !p-0 z-50 relative cursor-pointer"
            height="400"
            width="400"
            alt="thumbnail"
          />
        ))}
      </div>

      <Lightbox
        className="md:hidden"
        plugins={[Thumbnails]}
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={images?.map((url) => ({ src: url }))}
      />
    </>
  );
};

export default MobileGallery;
