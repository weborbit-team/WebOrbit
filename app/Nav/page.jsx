"use client";
import React, { useState, useEffect } from "react";

const Page = () => {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Check localStorage and system preferences
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const shouldBeDark =
      savedTheme === "dark" || (!savedTheme && systemPrefersDark);
    setIsDark(shouldBeDark);

    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all ease-linear ${
        isDark
          ? "bg-dark text-light"
          : "bg-light text-dark"
      }`}
    >
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-between px-8 h-[5rem]">
        {/* Logo */}
        <div className="flex items-center">
          <img src="../favicon.ico" alt="logo" className="h-10" />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center justify-center gap-8 absolute left-1/2 transform -translate-x-1/2 h-[5rem]">
          {["Home", "About Us", "Blog", "Services", "Contact Us"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative px-2 py-1 font-sm
    transition-all duration-300 ease-in-out
    hover:text-soft-pink dark:hover:text-pink
    origin-center"
              >
                {item}
              </a>
            )
          )}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="relative w-16 h-8 rounded-full transition-all duration-300 
              bg-pale-gray dark:bg-deep-blue
              before:content-[''] before:absolute before:top-[2px] before:left-[2px]
              before:w-7 before:h-7 before:rounded-full before:shadow-md
              before:transition-all before:duration-300
              before:bg-sky-blue dark:before:bg-mid-gray
              dark:before:translate-x-8
              hover:bg-pale-gray/90 dark:hover:bg-deep-blue/90
              focus:outline-none"
            aria-label="Toggle theme"
          >
            <div className="relative w-full h-full">
              {/* Sun Icon */}
              <span
                className={`absolute inset-0 flex items-center justify-center w-8 h-8
                  transition-all duration-300 ${
                    isDark ? "opacity-0" : "opacity-100"
                  }`}
              >
                ☀️
              </span>
              {/* Moon Icon */}
              <span
                className={`absolute inset-0 flex items-center justify-center w-8 h-8
                  transition-all duration-300 translate-x-8 ${
                    isDark ? "opacity-100" : "opacity-0"
                  }`}
              >
                🌙
              </span>
            </div>
          </button>

          {/* Desktop Get Started button */}
          <button
            className="
    px-6 py-3
    rounded-full 
    shadow-md 
    bg-dark dark:bg-light
    text-light dark:text-dark
    hover:bg-purple dark:hover:bg-purple
    hover:text-white dark:hover:text-white
    origin-center"
          >
            Get Started&nbsp;&gt;&gt;
          </button>
        </div>
      </div>
      <div className="md:hidden flex items-center justify-between px-4 h-[4rem]">
        {/* Hamburger Menu */}
        <button
          onClick={toggleMenu}
          className="text-2xl p-2 z-50"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

        {/* Centered Logo */}
        <div className="">
          <img src="../favicon.ico" alt="logo" className="h-8" />
        </div>

        {/* Mobile Buttons */}
        <div className="flex items-center gap-2">
          {/* Simplified Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="w-8 h-8 flex items-center justify-center rounded-full 
            bg-pale-gray dark:bg-deep-blue transition-all duration-300"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <span className="text-lg">🌙</span>
            ) : (
              <span className="text-lg">☀️</span>
            )}
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <>
          {/* Mobile Menu Overlay */}
          <div
            className={`md:hidden fixed inset-0 bg-light dark:bg-dark transition-all duration-300 z-40 ${
              isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
            style={{ top: "4rem" }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 text-xl">
              {["Home", "About Us", "Blog", "Services", "Contact Us"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="relative px-2 py-1 font-sm
                  transition-all duration-500 ease-in-out
                  hover:text-nav-hover hover:font-sm dark:font-sm
                  origin-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                )
              )}
              {/* Mobile Get Started button */}
              <button
                className="mt-4 
    bg-dark dark:bg-deep-blue 
    text-light dark:text-dark 
    text-base font-medium
    px-6 py-2.5 
    rounded-full
    shadow-md
    transition-all duration-300 ease-in-out
    hover:bg-purple dark:hover:bg-purple
    hover:text-white dark:hover:text-white
    hover:scale-105
    origin-center
    active:scale-95"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started &nbsp;&gt;&gt;
              </button>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Page;
