"use client";
import { Cookie } from "next/font/google";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useError } from "@/src/components/client-components/error/ErrorContext";

const cookie = Cookie({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  fallback: ["cursive", "system-ui"], // Fallback fonts if Cookie fails to load
  preload: true,
  adjustFontFallback: true,
});

const socialIcons = [
  {
    name: "GitHub",
    icon: <FiGithub className="w-6 h-6" />,
    url: "https://github.com",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn className="w-6 h-6" />,
    url: "https://linkedin.com",
  },
  {
    name: "Facebook",
    icon: <FaFacebookF className="w-6 h-6" />,
    url: "https://facebook.com",
  },
  {
    name: "Instagram",
    icon: <FaInstagram className="w-6 h-6" />,
    url: "https://instagram.com",
  },
];

const footerLinks = [
  {
    title: "Free Tools",
    links: [
      { name: "Free Marketing Tools", url: "#" },
      { name: "List Your Agency", url: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", url: "#" },
      { name: "Docs", url: "#" },
      { name: "Channels", url: "#" },
      { name: "Roadmap", url: "#" },
      { name: "Discord", url: "#" },
      { name: "Affiliate", url: "#" },
      { name: "Postiz Coin", url: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "Pricing", url: "#" },
      { name: "Terms of Service", url: "#" },
      { name: "Privacy Policy", url: "#" },
    ],
  },
];

const FooterContainer = () => {
  const { isError } = useError();

  // Don't render footer if we're on an error page
  if (isError) return null;
  return (
    <>
      <div className="bg-light-border/40 h-[5vh] rounded-tl-[6rem] rounded-tr-[6rem] flex flex-col items-center justify-center">
        {/* CTA Section */}
        <div className="text-center max-w-3xl px-4 mt-20 sm:mt-80">
          <h1 className="text-4xl md:text-6xl font-bold text-dark dark:text-light mb-4">
            Ready to get started?
          </h1>
          <h5 className="text-lg md:text-2xl text-dark/70 dark:text-light/70 mb-8">
            Grow your social media presence with Postiz.
            <br />
            Schedule, analyze, and engage with your audience.
          </h5>
          <Link href="/contact" className="btn-general">
            Get Started &gt;&gt;
          </Link>
        </div>
      </div>
      <div className="bg-light-border/40">
        <h1
          className={`${cookie.className} z-[-1] relative bottom-[-70] xs:md:bottom-[-130] sm:bottom-[-100] md:bottom-[-160] lg:bottom-[-220] text-center text-[27vw] text-[#e063ff] bg-clip-text`}
        >
          Web Orbit
        </h1>
      </div>

      {/* Footer Section */}
      <Footer />
    </>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-dark z-10 text-dark dark:text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Left Section */}
        <div className="mb-8 md:mb-0 w-full md:w-auto text-center md:text-left">
          <div className="flex items-center mb-4 justify-center md:justify-start">
            <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            <span
              className={`${cookie.className} text-3xl font-bold text-[var(--color-soft-pink)]`}
            >
              Web Orbit
            </span>
          </div>
          <p className="text-[var(--color-pale-gray)]">
            Open-source social media scheduling tool
          </p>
          <div className="flex space-x-4 mt-4 justify-center md:justify-start">
            {socialIcons.map((icon) => (
              <Link
                key={icon.name}
                href={icon.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center
                 dark:bg-white/10 bg-dark/10
                 dark:text-white text-dark
                 hover:bg-pink-500 hover:text-white
                 transition-all duration-300"
              >
                {icon.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full md:w-auto">
          {footerLinks.map((section) => (
            <div key={section.title} className="text-center md:text-left">
              <h3 className="text-lg font-semibold mb-4 text-light">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.url}
                      className="text-[var(--color-pale-gray)] hover:text-[var(--color-light)] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row justify-between items-center border-t border-[var(--color-light-border)] pt-6">
        <div className="text-[var(--color-pale-gray)] text-sm mb-4 md:mb-0 text-center md:text-left w-full">
          <p>© Web Orbit, {new Date().getFullYear()}. All rights reserved. </p>
          <p className="mt-1">
            Proudly open-source{" "}
            <span className="text-[var(--color-error-primary)]">♥</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterContainer;
