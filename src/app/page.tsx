import {
  About,
  Contact,
  Expertise,
  Footer,
  Hero,
  Work,
} from "@/components/comp";
import React from "react";

export default function page() {
  return (
    <>
      <div className="dark">
        <Hero />
        <About />
        <Expertise />
        <Work />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
