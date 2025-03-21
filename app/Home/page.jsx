"use client";
import React, { useState } from "react";
import Image from "next/image";
import Icons from "../../components/icons";
import { MarqueeDemo } from "../../components/magicui/Implemented/implementMarquee";
import { Pointer } from "@/components/magicui/pointer";
import { ShineBorder } from "@/components/magicui/Implemented/implementShineBorder";
import { motion, AnimatePresence } from "framer-motion";

// this is home page
const page = () => {
  const faqData = [
    {
      id: 1,
      question: "What services do you offer in web development?",
      answer: "We offer full-stack web development services including custom website design, e-commerce solutions, progressive web apps (PWAs), CMS development, and API integration. Our tech stack includes React, Next.js, Node.js, and other modern technologies."
    },
    {
      id: 2,
      question: "How long does it typically take to develop a mobile app?",
      answer: "The development timeline varies based on complexity. A basic app might take 3-4 months, while complex applications can take 6-12 months. We follow an agile methodology to ensure regular deliverables and updates throughout the development process."
    },
    {
      id: 3,
      question: "Do you provide maintenance and support after project completion?",
      answer: "Yes, we offer comprehensive post-launch support and maintenance packages. This includes bug fixes, security updates, performance optimization, and feature enhancements to keep your application running smoothly."
    },
    {
      id: 4,
      question: "What's your approach to UI/UX design?",
      answer: "We follow a user-centered design approach, starting with research and wireframing, moving to interactive prototypes, and finishing with polished designs. We ensure all interfaces are intuitive, responsive, and accessible."
    },
    {
      id: 5,
      question: "How do you handle project pricing?",
      answer: "Our pricing is project-based and depends on factors like scope, complexity, and timeline. We provide detailed estimates after thorough requirement analysis and offer flexible engagement models including fixed price and time & material."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

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
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-center max-w-4xl text-dark dark:text-white">
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
              rounded-full 
              shadow-md 
              bg-dark dark:bg-light
              text-light dark:text-dark
              hover:bg-purple dark:hover:bg-purple
              hover:text-white dark:hover:text-white
              origin-center text-base md:text-lg font-semibold
              w-full md:w-auto"
            >
              Start a 7-day trial&nbsp;&nbsp;&gt;&gt;
            </button>
          </div>
        </div>
      </main>

      <div className="h-full mb-64 flex flex-col items-center justify-center gap-5">
        <h1 className="text-dark dark:text-white text-4xl font-semibold mb-10">
          {" "}
          Trusted by customers all over the world
        </h1>
        <MarqueeDemo />
      </div>

      <div className="w-full flex flex-col md:flex-row items-start justify-center gap-8 min-h-screen px-4 py-16">
        <div className="w-full md:w-[30%] sticky top-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-2 text-dark dark:text-white">Frequently</h1>
          <h1 className="text-4xl md:text-6xl font-bold mb-2 text-dark dark:text-white">asked</h1>
          <h1 className="text-4xl md:text-6xl font-bold text-dark dark:text-white">questions</h1>
        </div>
        <div className="w-full md:w-[70%] space-y-6">
          {faqData.map((faq, index) => (
            <motion.div 
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <div className="border-2 border-gray-200/50 dark:border-gray-700/50 
                              rounded-3xl overflow-hidden transition-all duration-500 
                              shadow-sm hover:shadow-lg bg-white/50 dark:bg-gray-900/50 
                              backdrop-blur-sm">
                <button
                  className="w-full px-12 py-10 text-left flex justify-between items-center
                             group-hover:bg-gray-50/50 dark:group-hover:bg-gray-800/50
                             transition-all duration-300"
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                >
                  <span className="font-bold text-2xl md:text-3xl text-dark dark:text-white">
                    {faq.question}
                  </span>
                  <motion.span 
                    animate={{ 
                      rotate: activeIndex === index ? 45 : 0,
                      scale: activeIndex === index ? 1.2 : 1
                    }}
                    transition={{ 
                      duration: 0.4, 
                      ease: [0.4, 0, 0.2, 1]
                    }}
                    className="ml-6 text-3xl text-dark/70 dark:text-white/70
                               group-hover:text-dark dark:group-hover:text-white
                               transition-colors duration-300"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence mode="sync">
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: "auto", 
                        opacity: 1,
                        transition: {
                          height: { duration: 0.4 },
                          opacity: { duration: 0.25, delay: 0.15 }
                        }
                      }}
                      exit={{ 
                        height: 0, 
                        opacity: 0,
                        transition: {
                          height: { duration: 0.4 },
                          opacity: { duration: 0.25 }
                        }
                      }}
                      className="overflow-hidden"
                    >
                      <motion.div 
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        exit={{ y: -20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="px-12 pb-10 pt-4"
                      >
                        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 
                                    leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
