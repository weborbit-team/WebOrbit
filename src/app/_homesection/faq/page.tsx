'use client'
import React, { useState } from "react";
// import { Image } from "next/image";
// import { MarqueeDemo } from "@/src/components/magicui/Implemented/implementMarquee";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const faqData = [
  {
    id: 1,
    question: "What services do you offer in web development?",
    answer:
      "We provide full-stack web development, including custom designs, e-commerce, PWAs, CMS, and API integration using React, Next.js, and Node.js.",
  },
  {
    id: 2,
    question: "How long does it typically take to develop a mobile app?",
    answer:
      "Basic apps take 3-4 months; complex ones take 6-12 months, using an agile approach.",
  },
  {
    id: 3,
    question:
      "Do you provide maintenance and support after project completion?",
    answer:
      "Yes, we offer support packages with bug fixes, updates, and enhancements.",
  },
  {
    id: 4,
    question: "What's your approach to UI/UX design?",
    answer:
      "We use a user-centered process with research, wireframes, prototypes, and responsive designs.",
  },
  {
    id: 5,
    question: "How do you handle project pricing?",
    answer:
      "Pricing varies by scope and complexity; we offer fixed-price or time & material estimates after analysis.",
  },
];

const Features = () => {
const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      {/* FAQ */}
      <div className="w-full flex flex-col lg:flex-row items-center md:items-start justify-center gap-8 min-h-screen px-4 py-16 ">
        <div className="w-full lg:w-[25%] flex flex-col items-center justify-center lg:mb-34 sticky top-20 lg:ml-10">
          <h1 className="text-3xl text-center md:text-5xl font-bold mb-2 text-dark dark:text-light">
            Frequently asked questions
          </h1>
          <Image
            src="/homeSvg/drawing4.svg"
            alt="Hero illustration"
            width={230}
            height={230}
            priority
            className="left-2  
    xs:left-4 xs:top-[20rem] 
    sm:left-6 sm:top-[25rem] 
    md:left-8 md:top-[30rem] 
    lg:left-16 lg:top-[32rem] 
    transition-all duration-300"
          />
        </div>
        <div className="w-full lg:w-[65%] space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              <div
                className="border border-light-border/20 dark:border-light-border 
                              rounded-3xl overflow-hidden  
                              shadow-sm hover:shadow-lg bg-sky-blue/20 dark:bg-light-dark 
                              backdrop-blur-sm"
              >
                <button
                  className="w-full px-4 md:px-12 py-5 text-left flex justify-between items-center
                             transition-all duration-300"
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                >
                  <span className="font-bold text-lg md:text-2xl text-dark dark:text-light">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{
                      rotate: activeIndex === index ? 180 : 0,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    className="ml-6 text-3xl text-dark/70 dark:text-light/70
                               group-hover:text-dark dark:group-hover:text-light
                               transition-colors duration-300"
                  >
                    ^
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
                          height: { duration: 0.2 },
                          opacity: { duration: 0.25, delay: 0.15 },
                        },
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                          height: { duration: 0.2 },
                          opacity: { duration: 0.25 },
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        exit={{ y: -20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="px-4 md:px-12 pb-10 "
                      >
                        <p
                          className="text-sm md:text-xl text-dark dark:text-light
                                    leading-relaxed"
                        >
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

export default Features;
