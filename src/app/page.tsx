import React from "react";
// import Navbar from "@/src/components/ui/Navbar";
import Hero from "@/src/app/_homesection/hero/page";
import Marquee  from "@/src/app/_homesection/Marquee/page";
import Feature from "@/src/app/_homesection/faq/page"

const page = () => {
  return (
    <div>
      <Hero />
      <Marquee />
      <Feature />
    </div>
  );
};

export default page;
