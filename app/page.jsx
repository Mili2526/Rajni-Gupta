// import components
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import About from "@/components/About";
import Quote from "@/components/Quote";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <About />
        <Timeline />
        <Quote />
      </main>
    </div>
  );
}
