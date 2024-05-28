import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { promises } from "fs";
import path from "path";
import MobileGallery from "./MobileGallery";

export async function PhotosGallery() {
  const imageDirectory = path.join(process.cwd(), "/public/photos");
  const imageFilenames = await promises.readdir(imageDirectory);
  const photos = imageFilenames.map((file) => `/photos/${file}`);
  return (
    <>
      <ParallaxScroll
        images={photos}
        className="w-full p-0 h-full hidden md:block"
      />
      <MobileGallery images={photos} />
    </>
  );
}
