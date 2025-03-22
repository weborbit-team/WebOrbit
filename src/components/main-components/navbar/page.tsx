"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/src/components/client-components/Theme/ThemeToggle";

const Navbar: React.FC = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const pathname = usePathname(); // Get current route

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = (): void => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleMenu = (): void => {
    setIsMenuOpen((prev) => !prev);
  };

  // Helper function to determine if a link is active
  const isActive = (item: string): boolean => {
    if (item === "Home") return pathname === "/";
    const formattedPath = `/${item.toLowerCase().replace(/\s+/g, "")}`;
    return pathname === formattedPath;
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 ${
        theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"
      }`}
    >
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center justify-between px-8 h-[5rem]">
        <div className="flex items-center">
          <img src="../favicon.ico" alt="logo" className="h-10" />
        </div>

        <div className="flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          <a
            href="/"
            className={`px-2 py-1 hover:text-soft-pink dark:hover:text-pink font-medium ${
              isActive("Home") ? "text-pink-500" : ""
            }`}
          >
            Home
          </a>

          {["About Us", "Blog", "Services", "Contact Us"].map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase().replace(/\s+/g, "")}`}
              className={`px-2 py-1 hover:text-soft-pink dark:hover:text-pink font-medium ${
                isActive(item) ? "text-pink-500" : ""
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle /> {/* Desktop toggle */}
          <button className="btn-general">Get Started &gt;&gt;</button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden flex items-center justify-between px-4 h-[4rem]">
        <button
          onClick={toggleMenu}
          className="text-2xl p-2 z-50"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
        <div>
          <img src="../favicon.ico" alt="logo" className="h-8" />
        </div>
        <ThemeToggle /> {/* mobile toggle */}
      </div>

      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-light dark:bg-dark z-40"
          style={{ top: "4rem" }}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8 text-xl">
            <a
              className={`px-2 py-1 hover:text-nav-hover ${
                isActive("Home") ? "text-pink-500" : ""
              }`}
              href="/"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>

            {["About Us", "Blog", "Services", "Contact Us"].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase().replace(/\s+/g, "")}`}
                className={`px-2 py-1 hover:text-nav-hover ${
                  isActive(item) ? "text-pink-500" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
