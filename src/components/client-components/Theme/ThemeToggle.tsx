"use client";
import React from "react";
import { useTheme } from "next-themes";

const ThemeToggle = ({ isMobile = false }) => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return isMobile ? (
    // Mobile version of the toggle
    <button
      onClick={toggleTheme}
      className="w-8 h-8 flex items-center justify-center rounded-full bg-pale-gray dark:bg-deep-blue"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  ) : (
    // Desktop version of the toggle
    <button
      onClick={toggleTheme}
      className="relative w-16 h-8 rounded-full bg-mid-gray dark:bg-sky-blue overflow-hidden"
      aria-label="Toggle theme"
    >
      <span
        className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-sky-blue dark:bg-mid-gray transition-all duration-300 ${
          theme === "dark" ? "translate-x-8" : ""
        }`}
      />
      <span
        className={`absolute left-1 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center transition-opacity duration-300 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        }`}
      >
        ☀️
      </span>
      <span
        className={`absolute right-1 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center transition-opacity duration-300 ${
          theme === "dark" ? "opacity-100" : "opacity-0"
        }`}
      >
        🌙
      </span>
    </button>
  );
};

export default ThemeToggle;
