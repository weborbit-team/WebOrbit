import React from "react";
import { ReactNode } from "react";

export const metadata = {
  title: "Blog | WebOrbit - Tech Insights from Experts",
  description:
    "Read tech insights from WebOrbit’s team—experts in MERN/Next.js web dev, Unity games, and AI—covering the latest in digital innovation.",
};

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
