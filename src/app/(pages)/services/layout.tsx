import React from "react";
import { ReactNode } from "react";

export const metadata = {
  title: "Services | WebOrbit - Web, Apps, Games & AI Expertise",
  description:
    "WebOrbit provides affordable, creative MERN/Next.js websites, apps, Unity games, and AI solutions with fast delivery for any client.",
};


const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
