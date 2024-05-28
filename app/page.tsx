import Footer from "@/components/footer/Footer";
import { Hero } from "@/components/hero/Hero";
import { Showcase } from "@/components/showcase/Showcase";

export default function Home() {
  return (
    <main className="h-dvh overflow-y-scroll snap-y snap-mandatory overflow-x-hidden ">
      <section className="h-[90%] snap-end mb-2">
        <Hero />
      </section>
      <section className="h-[100%] p-2 snap-end ">
        <Showcase />
      </section>
      {/* <Footer /> */}
    </main>
  );
}
