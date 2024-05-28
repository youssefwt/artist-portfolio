import { Tabs } from "../ui/tabs";
import { PaintingsGallery } from "./Paintings";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { PhotosGallery } from "./Photography";

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
      title: "Photography",
      value: "photography",
      content: (
        <div className="w-full overflow-y-auto relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-custom-gradient items-center">
          <PhotosGallery />
        </div>
      ),
    },
    {
      title: "Lifestyle",
      value: "lifestyle",
      content: (
        <div className="w-full overflow-y-auto relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-custom-gradient items-center"></div>
      ),
    },
    {
      title: "Crafts",
      value: "crafts",
      content: (
        <div className="w-full overflow-y-auto relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-custom-gradient items-center"></div>
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
