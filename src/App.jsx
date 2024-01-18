import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollTop from "./components/ScrollTop";
import { useInView } from "react-intersection-observer";

const App = () => {
  const { ref: homeComponent, inView } = useInView({
    threshold: 1,
  });

  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    setShowScrollUp(!inView);
  }, [inView]);

  return (
    <div className="min-h-screen overflow-hidden text-gray-900">
      <div className="flex min-h-screen flex-col" id="home" ref={homeComponent}>
        <Navbar />
        <Hero />
        <ScrollTop setVisibility={showScrollUp} />
      </div>
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
