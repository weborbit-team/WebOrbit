import React from "react";
import Hero from "@/src/app/_homesection/hero/page";
import Marquee from "@/src/app/_homesection/Marquee/page";
import Services from "@/src/app/_homesection/services/page";
import FAQ from "@/src/app/_homesection/faq/page";

const page = () => {
  return (
    <div>
      <Hero />
      <Marquee />
      <Services />
      <FAQ />
    </div>
  );
};

export default page;
