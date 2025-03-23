"use client";
import { cn } from "@/src/lib/utils";
import { Marquee } from "@/src/components/magicui/marquee";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Image from "next/image"; // Add this import

const reviews = [
  {
    name: "Harry Potter",
    username: "@harrypotter",
    body: "I don’t go looking for trouble. Trouble usually finds me.",
    img: "https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg",
    color: "#270194", // Deep Blue-Purple (Dark Theme)
    lightThemeColor: "#6b4cff", // Light Purple-Blue (Light Theme)
  },
  {
    name: "Hermione Granger",
    username: "@hermionegranger",
    body: "It’s leviOsa, not levioSA!",
    img: "https://upload.wikimedia.org/wikipedia/en/d/d3/Hermione_Granger_poster.jpg",
    color: "#4e0387", // Dark Purple (Dark Theme)
    lightThemeColor: "#8a4cff", // Soft Purple (Light Theme)
  },
  {
    name: "Ron Weasley",
    username: "@ronweasley",
    body: "Why spiders? Why couldn’t it be ‘follow the butterflies’?",
    img: "https://upload.wikimedia.org/wikipedia/en/5/5e/Ron_Weasley_poster.jpg",
    color: "#5809bc", // Vibrant Purple-Blue (Dark Theme)
    lightThemeColor: "#9b66ff", // Bright Purple-Blue (Light Theme)
  },
  {
    name: "Draco Malfoy",
    username: "@dracomalfoy",
    body: "My father will hear about this!",
    img: "https://upload.wikimedia.org/wikipedia/en/1/16/Draco_Mal.JPG",
    color: "#0828ae", // Dark Blue (Dark Theme)
    lightThemeColor: "#5c80ff", // Light Blue (Light Theme)
  },
  {
    name: "Ginny Weasley",
    username: "@ginnyweasley",
    body: "The thing about growing up with Fred and George, is that you sort of start thinking anything's possible if you’ve got enough nerve.",
    img: "https://upload.wikimedia.org/wikipedia/en/e/e7/Ginny_Weasley_poster.jpg",
    color: "#270194", // Deep Blue-Purple (Dark Theme) - Reusing Color 1
    lightThemeColor: "#6b4cff", // Light Purple-Blue (Light Theme)
  },
  {
    name: "Remus Lupin",
    username: "@remuslupin",
    body: "It is the quality of one’s convictions that determines success, not the number of followers.",
    img: "https://upload.wikimedia.org/wikipedia/en/2/2f/Remus_Lupin.jpeg",
    color: "#4311d1", // Rich Blue-Purple (Dark Theme) - Reusing Color 5
    lightThemeColor: "#9270ff", // Muted Blue-Purple (Light Theme)
  },
  {
    name: "Lord Voldemort",
    username: "@lordvoldemort",
    body: "There is no good and evil. There is only power... and those too weak to seek it.",
    img: "https://upload.wikimedia.org/wikipedia/en/a/a3/Lordvoldemort.jpg",
    color: "#0828ae", // Dark Blue (Dark Theme) - Reusing Color 6
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
        "relative h-full cursor-pointer overflow-hidden rounded-xl border p-4 sm:p-5 md:p-6 lg:p-6.5", // Adjusted padding
        "w-64", // Responsive width
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
        <Image
          src={img}
          alt={`Avatar of ${name}`}
          width={24}
          height={24}
          className="rounded-full sm:w-[28px] sm:h-[28px] md:w-[32px] md:h-[32px]"
          unoptimized // Since these are from external domain
        />
        <div className="flex flex-col">
          <figcaption className="text-xs sm:text-sm font-medium">
            {name}
          </figcaption>
          <p className="text-[10px] sm:text-xs font-medium opacity-60">
            {username}
          </p>
        </div>
      </div>
      <blockquote className="mt-2 text-xs sm:text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-light dark:bg-dark">
      <Marquee pauseOnHover className="[--duration:15s] [--gap:1rem]">
        {" "}
        {/* Added gap control */}
        {firstRow.map((review) => (
          <ReviewCard
            key={review.username}
            {...review}
            lightThemeColor={review.lightThemeColor}
          />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:15s]">
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
