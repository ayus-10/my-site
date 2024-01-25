import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollTop from "./components/ScrollTop";
import { useInView } from "react-intersection-observer";
import Footer from "./components/Footer";

const App = () => {
  // If heroComponent covers 80% of the screen, inView is true
  const { ref: heroComponent, inView } = useInView({
    threshold: 0.8,
  });

  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    // Used to conditionally show/hide the ScrollTop component
    setShowScrollUp(!inView);
  }, [inView]);

  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    // On initial page load, get previous darkTheme state
    let dark_theme = JSON.parse(localStorage.getItem("dark_theme"));
    if (dark_theme) {
      // Set previous state if its not null
      setDarkTheme(dark_theme);
    }
  }, []);

  const changeTheme = () => {
    // Toggle dark theme state
    setDarkTheme(!darkTheme);
    // Saving !darkTheme because the state will only be updated on next re-render
    localStorage.setItem("dark_theme", JSON.stringify(!darkTheme));
  };

  return (
    <div
      className={`min-h-screen overflow-hidden ${darkTheme ? "text-white" : "text-gray-900"}`}
    >
      <div className="flex min-h-screen flex-col" id="home" ref={heroComponent}>
        <Navbar changeTheme={changeTheme} darkTheme={darkTheme} />
        <Hero darkTheme={darkTheme} />
        <ScrollTop setVisibility={showScrollUp} />
      </div>
      <Skills darkTheme={darkTheme} />
      <Projects darkTheme={darkTheme} />
      <Contact darkTheme={darkTheme} />
      <Footer darkTheme={darkTheme} />
    </div>
  );
};

export default App;
