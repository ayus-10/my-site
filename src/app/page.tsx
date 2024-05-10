"use client";

import { useEffect } from "react";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import { showWarning } from "@/utils/showWarning";

export default function Home() {
  useEffect(() => showWarning(), []);

  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
