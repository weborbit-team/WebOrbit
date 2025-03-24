"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useError } from "@/src/components/client-components/error/ErrorContext";
import { motion, AnimatePresence } from "framer-motion";

const NotFound = () => {
  const { setIsError } = useError();
  const [particles, setParticles] = useState<Array<{ x: number; y: number }>>(
    []
  );

  // Handle error state
  useEffect(() => {
    setIsError(true);
    return () => setIsError(false);
  }, [setIsError]);

  // Initialize particles after mount
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
        {/* Animated Background Grid */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 opacity-20">
            <div className="h-full w-full bg-[linear-gradient(transparent_1px,_transparent_1px),_linear-gradient(to_right,_transparent_1px,_transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
          </div>
        </div>

        {/* Floating Particles Effect */}
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[var(--color-404-text-primary)] rounded-full"
              initial={{
                x: particle.x,
                y: particle.y,
              }}
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

        {/* Robot Container with Enhanced Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="relative  group"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [-2, 2, -2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <Image
              src="/notfound/robot.png"
              alt="Confused Robot"
              width={400}
              height={400}
              className="w-48 sm:w-56 md:w-64 lg:w-80 filter drop-shadow-[0_0_20px_var(--color-404-glow)]
                group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </motion.div>

          {/* Enhanced Speech Bubble */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute 
    -right-4 -top-30        /* Mobile positioning */
    sm:-right-30 sm:-top-20  /* Tablet positioning */
    md:-right-40 md:-top-20   /* Desktop positioning */
    lg:-right-35 lg:-top-12   /* Large desktop positioning */
    bg-[var(--color-404-accent)]/10 
    backdrop-blur-md border border-[var(--color-404-border)] 
    p-4 sm:p-5 md:p-6      /* Responsive padding */
    rounded-xl sm:rounded-2xl
    max-w-[180px] sm:max-w-[200px] md:max-w-[240px]  /* Responsive width */
    transform rotate-3 sm:rotate-6
    hover:backdrop-blur-lg hover:bg-[var(--color-404-accent)]/20 
    transition-all duration-300
    z-10"
          >
            <p
              className="text-[var(--color-404-text-primary)] 
    text-xs sm:text-sm md:text-base 
    font-mono leading-relaxed"
            >
              <motion.span
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block"
              >
                ▋
              </motion.span>
              *beep boop* Error detected! Page not found in my database.
            </p>
          </motion.div>
        </motion.div>

        {/* Enhanced Glitch Effect 404 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative mb-12 hover:scale-105 transition-transform duration-300"
        >
          {/* Main 404 Text */}
          <h1
            className="text-8xl md:text-9xl font-black text-transparent bg-clip-text 
            bg-gradient-to-r from-[var(--color-404-text-primary)] to-[var(--color-404-accent)] 
            filter drop-shadow-[0_0_10px_var(--color-404-glow)]
            hover:drop-shadow-[0_0_20px_var(--color-404-glow)] transition-all duration-300"
          >
            404
          </h1>

          {/* Glitch Effect Layer */}
          <motion.div
            animate={{
              x: [-2, 2, -2],
              opacity: [0.3, 0.2, 0.3],
            }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="absolute inset-0 text-[var(--color-404-text-primary)]"
          >
            404
          </motion.div>

          {/* Professional Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 space-y-3"
          >
            <h2 className="text-xl md:text-2xl font-medium text-[var(--color-404-text-primary)]">
              Page Not Found
            </h2>
            <p className="text-sm md:text-base text-[var(--color-404-text-secondary)] max-w-md mx-auto">
              The page you&apos;re looking for doesn&apos;t exist or has been
              moved. Please check the URL or navigate back to the homepage.
            </p>
          </motion.div>
        </motion.div>

        {/* Enhanced Return Home Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          className="relative"
        >
          <div
            className="absolute -inset-1 bg-gradient-to-r from-[var(--color-404-text-primary)] 
            to-[var(--color-404-accent)] rounded-lg blur-md opacity-75 group-hover:opacity-100 
            transition duration-1000 group-hover:duration-200"
          />
          <Link
            href="/"
            className="group relative flex items-center gap-2 px-8 py-3 
              bg-[var(--color-404-bg-start)] rounded-lg 
              transition-all duration-300"
          >
            <span
              className="relative z-10 font-mono text-[var(--color-404-text-primary)] 
              group-hover:text-white transition-colors duration-300"
            >
              RETURN_HOME();
            </span>
            <motion.svg
              className="w-5 h-5 text-[var(--color-404-text-primary)] 
                group-hover:text-white transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
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

export default NotFound;
