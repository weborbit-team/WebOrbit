import React from 'react'
import { MarqueeDemo } from "@/src/components/client-components/implementMarquee";

{/* Marquee  */}
const Marquee = () => {
  return (
          <div className="h-full mb-64 flex flex-col items-center justify-center gap-5">
            <h1 className="text-dark dark:text-light text-4xl font-semibold mb-10">
              {" "}
              Trusted by customers all over the world
            </h1>
            <MarqueeDemo />
          </div>
  )
}

export default Marquee
