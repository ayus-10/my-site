import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollTop from "./components/ScrollTop";

const App = () => {
  return (
    <div className="min-h-screen overflow-hidden text-gray-900">
      <div className="flex min-h-screen flex-col" id="home">
        <Navbar />
        <Hero />
        <ScrollTop />
      </div>
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
