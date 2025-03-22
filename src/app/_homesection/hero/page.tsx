"use client";
import React from "react";
import Image from "next/image";
import Icons from "@/src/components/icons";

// this is home page
const page = () => {
  return (
    <>
      <main
        className="mt-[4rem] md:mt-[5rem] min-h-screen
      bg-light dark:bg-dark
      text-dark dark:text-white
      overflow-x-hidden"
      >
        <img
          src="/homeSvg/drawing3.svg"
          alt=""
          className="absolute 
    right-2 top-[15rem] scale-[0.8]
    xs:right-3 xs:top-[13rem] xs:scale-[1]
    sm:right-4 sm:top-[12rem] sm:scale-[1.2]
    md:right-5 md:top-[10rem] md:scale-[1.5]
    lg:right-10 lg:top-[12rem] lg:scale-[2]
    transition-all duration-300"
        />
        <img
          src="/homeSvg/drawing2.svg"
          alt=""
          className="absolute 
    left-2 top-[35rem] scale-[1]
    xs:left-4 xs:top-[20rem] xs:scale-[1.5]
    sm:left-6 sm:top-[25rem] sm:scale-[2]
    md:left-8 md:top-[30rem] md:scale-[2.5]
    lg:left-16 lg:top-[32rem] lg:scale-[3]
    transition-all duration-300"
        />
        <div className="flex flex-col items-center justify-center gap-5 md:gap-7 px-4 py-8 md:py-12">
          <div className="flex items-center justify-center w-full">
            <Image
              src="/homeSvg/image1.svg"
              alt="Hero illustration"
              width={40}
              height={40}
              priority
              className=" xs:w-[30px] sm:w-[40px] md:w-[50px] lg:w-[60px] xl:w-[70px] "
            />
          </div>
          <div className="flex items-center justify-center gap-2">
            <Image
              src="/homeSvg/gitt.svg"
              alt="GitHub icon"
              width={25}
              height={25}
              className="w-5 h-5 md:w-[25px] md:h-[25px]"
            />
            <Image
              src="/homeSvg/star.svg"
              alt="Star icon"
              width={25}
              height={25}
              className="w-5 h-5 md:w-[25px] md:h-[25px]"
            />
            <h1 className="text-xl md:text-2xl font-semibold mt-[5px] text-dark dark:text-white">
              18.2K
            </h1>
          </div>
          <div className="max-w-5xl px-2">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-center max-w-3xl text-dark dark:text-white">
              Your ultimate social media scheduling tool
            </h1>
            <img
              src="/homeSvg/drawing.svg"
              className="hidden lg:block max-w-5xl float-end"
              alt=""
            />
          </div>
          <Icons />
          <div className="max-w-3xl px-4">
            <p className="text-lg md:text-xl text-center font-semibold text-dark dark:text-white">
              Postiz offers everything you need to manage your social media
              posts, build an audience, capture leads, and grow your business.
            </p>
          </div>
          <div>
            <button
              className="mt-4  
              px-6 md:px-10 py-3 md:py-4
              btn-general
              origin-center text-base md:text-lg font-semibold
              w-full md:w-auto"
            >
              Start a 7-day trial&nbsp;&nbsp;&gt;&gt;
            </button>
          </div>
        </div>
      </main>

      
    </>
  );
};

export default page;
