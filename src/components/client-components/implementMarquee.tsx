'use client'
import { cn } from "@/src/lib/utils";
import { Marquee } from "@/src/components/magicui/marquee";
import { useTheme } from 'next-themes' // Add this import
import { useState, useEffect } from "react";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
    color: "#270194", // Deep Blue-Purple (Dark Theme)
    lightThemeColor: "#6b4cff", // Light Purple-Blue (Light Theme)
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
    color: "#4e0387", // Dark Purple (Dark Theme)
    lightThemeColor: "#8a4cff", // Soft Purple (Light Theme)
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
    color: "#5809bc", // Vibrant Purple-Blue (Dark Theme)
    lightThemeColor: "#9b66ff", // Bright Purple-Blue (Light Theme)
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
    color: "#5511ce", // Lighter Purple (Dark Theme)
    lightThemeColor: "#a880ff", // Lighter Purple (Light Theme)
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
    color: "#4311d1", // Rich Blue-Purple (Dark Theme)
    lightThemeColor: "#9270ff", // Muted Blue-Purple (Light Theme)
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
    color: "#0828ae", // Dark Blue (Dark Theme)
    lightThemeColor: "#5c80ff", // Light Blue (Light Theme)
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
  color,
  lightThemeColor,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
  color: string;
  lightThemeColor: string;
}) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent rendering until mounted
  const currentColor = theme === "light" ? lightThemeColor : color;

  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-6.5",
        // light styles
        "border-gray-950/[.1] hover:bg-gray-950/[.05] text-dark",
        // dark styles
        "dark:border-gray-50/[.1] dark:hover:bg-gray-50/[.15] dark:text-white"
      )}
      style={{
        background: `linear-gradient(to right, 
    ${currentColor}${theme === "dark" ? "CC" : "80"}, 
    ${currentColor}${theme === "dark" ? "FF" : "B3"})`,
        borderColor: currentColor,
      }}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium">{name}</figcaption>
          <p className="text-xs font-medium opacity-60">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-light dark:bg-dark">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard 
            key={review.username} 
            {...review}
            lightThemeColor={review.lightThemeColor} 
          />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard 
            key={review.username} 
            {...review}
            lightThemeColor={review.lightThemeColor}
          />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r  dark:from-dark"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l  dark:from-dark"></div>
    </div>
  );
}
