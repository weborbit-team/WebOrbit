import React from "react";
import { MarqueeDemo } from "@/src/components/client-components/implementMarquee";

const Marquee = () => {
  return (
    <div className="h-full mb-28 md:mb-44 flex flex-col items-center justify-center gap-5">
      <h1 className="text-dark dark:text-light text-center font-semibold mb-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        Trusted by customers all over the world
      </h1>
      <MarqueeDemo />
    </div>
  );
};

export default Marquee;
