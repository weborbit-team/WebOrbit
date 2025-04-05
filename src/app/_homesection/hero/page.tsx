"use client";
import React from "react";
import Image from "next/image";
import Icons from "@/src/components/client-components/Icons/icons";

// this is home page of weborbit
const page = () => {
  return (
    <>
      <main
        className="mt-[3rem] md:mt-[4rem] min-h-screen
        bg-light dark:bg-dark
        text-dark dark:text-white
        overflow-x-hidden  
        flex flex-col justify-center"
      >
        <Image
          src="/homeSvg/drawing3.svg"
          alt="Decorative illustration"
          width={80}
          height={80}
          className="absolute 
            right-2 top-[10rem] scale-[0.8]
            xs:right-3 xs:top-[8rem] xs:scale-[1]
            sm:right-4 sm:top-[7rem] sm:scale-[1.2]
            md:right-5 md:top-[6rem] md:scale-[1.5]
            lg:right-10 lg:top-[8rem] lg:scale-[2]
            transition-all duration-300"
        />
        <Image
          src="/homeSvg/drawing2.svg"
          alt="Decorative illustration"
          width={80}
          height={80}
          className="absolute 
            left-2 top-[25rem] scale-[1]
            xs:left-4 xs:top-[15rem] xs:scale-[1.5]
            sm:left-6 sm:top-[18rem] sm:scale-[2]
            md:left-8 md:top-[20rem] md:scale-[2.5]
            lg:left-16 lg:top-[22rem] lg:scale-[3]
            transition-all duration-300"
        />
        <div className="flex flex-col items-center justify-center gap-3 md:gap-4 px-4 py-4 mb-20 md:py-6">
          <div className="max-w-5xl px-2 mt-2">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-center max-w-3xl lg:max-w-4xl text-dark dark:text-white">
              Crafting Web Wonders & Gaming Glory, End-to-End!  
            </h1>
            <Image
              src="/homeSvg/drawing.svg"
              alt="Decorative illustration"
              width={220}
              height={220}
              className="hidden lg:block max-w-5xl float-end"
            />
          </div>
          <Icons />
          <div className="max-w-3xl px-4 mt-2">
            <p className="text-lg md:text-xl text-center font-semibold text-dark dark:text-white">
              Our agency delivers all you need for stunning websites, immersive games, and business growt - full stack, full impact.
            </p>
          </div>
          <div>
            <button
              className="mt-2
              px-6 md:px-8 py-2 md:py-3
              btn-general
              origin-center text-base md:text-lg font-semibold
              w-full md:w-auto"
            >
              Ask Us Anything&nbsp;&nbsp;&gt;&gt;
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default page;
