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

  const [darkTheme, setDarkTheme] = useState(false);

  const changeTheme = () => setDarkTheme(!darkTheme);

  return (
    <div
      className={`min-h-screen overflow-hidden ${darkTheme ? "text-white" : "text-gray-900"}`}
    >
      <div className="flex min-h-screen flex-col" id="home" ref={homeComponent}>
        <Navbar changeTheme={changeTheme} darkTheme={darkTheme} />
        <Hero darkTheme={darkTheme} />
        <ScrollTop setVisibility={showScrollUp} />
      </div>
      <Skills darkTheme={darkTheme} />
      <Projects darkTheme={darkTheme} />
      <Contact darkTheme={darkTheme} />
    </div>
  );
};

export default App;
