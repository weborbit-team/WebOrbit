"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useError } from "@/src/components/client-components/error/ErrorContext";

const ErrorPage = ({ statusCode }: { statusCode?: number }) => {
  const { setIsError } = useError();
  const [particles, setParticles] = useState<Array<{ x: number; y: number }>>(
    []
  );

  useEffect(() => {
    setIsError(true);
    return () => setIsError(false);
  }, [setIsError]);

  useEffect(() => {
    const particlesArray = Array.from({ length: 20 }, () => ({
      x:
        Math.random() *
        (typeof window !== "undefined" ? window.innerWidth : 1000),
      y:
        Math.random() *
        (typeof window !== "undefined" ? window.innerHeight : 1000),
    }));
    setParticles(particlesArray);
  }, []);

  return (
    <AnimatePresence>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[var(--color-404-bg-start)] via-[var(--color-404-bg-mid)] to-[var(--color-404-bg-end)] p-6 text-center relative overflow-hidden">
        {/* Particles Effect */}
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[var(--color-error-accent)] rounded-full"
              initial={{ x: particle.x, y: particle.y }}
              animate={{
                y: [null, Math.random() * -500],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 5 + 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Error Robot Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="relative mb-12 group"
        >
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [-2, 2, -2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/notfound/robot.png"
              alt="Error Robot"
              width={400}
              height={400}
              className="w-48 sm:w-56 md:w-64 lg:w-80 filter drop-shadow-[0_0_20px_var(--color-error-glow)]
                group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </motion.div>

          {/* Speech Bubble */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute 
              -right-4 -top-16 
              sm:-right-20 sm:-top-8
              md:-right-28 md:top-0 
              lg:-right-35 lg:top-0 
              bg-[var(--color-error-accent)]/10 
              backdrop-blur-md border border-[var(--color-error-border)]
              p-4 sm:p-5 md:p-6
              rounded-xl sm:rounded-2xl
              max-w-[200px] sm:max-w-[240px] md:max-w-[280px]
              transform rotate-3 sm:rotate-6
              hover:backdrop-blur-lg hover:bg-[var(--color-error-accent)]/20 
              transition-all duration-300
              z-10"
          >
            <p className="text-[var(--color-error-text)] text-xs sm:text-sm md:text-base font-mono leading-relaxed">
              <motion.span
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block"
              >
                ▋
              </motion.span>
              *system error*{" "}
              {statusCode
                ? `Error ${statusCode} detected!`
                : "Unknown error detected!"}
            </p>
          </motion.div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative mb-12"
        >
          <h1
            className="text-6xl sm:text-7xl md:text-8xl font-black text-transparent bg-clip-text 
            bg-gradient-to-r from-[var(--color-error-primary)] to-[var(--color-error-accent)]
            filter drop-shadow-[0_0_10px_var(--color-error-glow)]"
          >
            {statusCode || "Error"}
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-[var(--color-error-text)] text-lg md:text-xl"
          >
            Our systems encountered an unexpected error.
            <br />
            <span className="text-sm md:text-base opacity-75">
              Our team has been notified and is working on it.
            </span>
          </motion.p>
        </motion.div>

        {/* Return Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="relative"
        >
          <Link
            href="/"
            className="group relative inline-flex items-center gap-2 px-8 py-3 
              bg-gradient-to-r from-[var(--color-error-primary)] to-[var(--color-error-accent)]
              rounded-lg overflow-hidden transition-all duration-300 
              hover:scale-105 hover:shadow-[0_0_20px_var(--color-error-glow)]"
          >
            <span className="relative z-10 font-mono text-white group-hover:text-[var(--color-error-text)]">
              Return to Safety
            </span>
            <motion.svg
              className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 5l7 7-7 7M5 12h15"
              />
            </motion.svg>
          </Link>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ErrorPage;
