import React from "react";
import { ReactNode } from "react";

export const metadata = {
  title: "Contact Us | WebOrbit - Affordable Digital Solutions",
  description:
    "Contact WebOrbit for fast, affordable websites (MERN/Next.js), apps, Unity games, or AI solutions from our experienced four-person team.",
};

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
