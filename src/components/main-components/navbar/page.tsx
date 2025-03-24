"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/src/components/client-components/Theme/ThemeToggle";
import Image from "next/image";
import Link from "next/link";
import { useError } from "@/src/components/client-components/error/ErrorContext"

const Navbar: React.FC = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const pathname = usePathname(); // Get current route
  const { isError } = useError();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  if (!mounted) return null;

  // Don't render navbar if we're on an error page
  if (isError) return null;

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
          <Image
            src="/favicon.ico"
            alt="Logo"
            width={40}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </div>

        <div className="flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          <Link
            href="/"
            className={`px-2 py-1 hover:text-soft-pink dark:hover:text-pink font-medium ${
              isActive("Home") ? "text-pink" : ""
            }`}
          >
            Home
          </Link>

          {["About Us", "Blog", "Services", "Contact Us"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(/\s+/g, "")}`}
              className={`px-2 py-1 hover:text-soft-pink dark:hover:text-pink font-medium ${
                isActive(item) ? "text-pink" : ""
              }`}
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle isMobile={false} /> {/* Explicitly set desktop */}
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
          <Image
            src="/favicon.ico"
            alt="Logo"
            width={32}
            height={32}
            className="h-8 w-auto"
            priority
          />
        </div>
        <ThemeToggle isMobile={true} /> {/* Pass true for mobile */}
      </div>

      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 backdrop-blur-md bg-light/80 dark:bg-dark/80 z-40 
          transition-all duration-300 ease-in-out overflow-hidden"
          style={{ top: "4rem" }}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8 text-xl">
            <Link
              className={`px-2 py-1 hover:text-nav-hover ${
                isActive("Home") ? "text-pink-500" : ""
              }`}
              href="/"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            {["About Us", "Blog", "Services", "Contact Us"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(/\s+/g, "")}`}
                className={`px-2 py-1 hover:text-nav-hover ${
                  isActive(item) ? "text-pink-500" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <button className=" btn-general-mobile ">
              Get Started &gt;&gt;
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
