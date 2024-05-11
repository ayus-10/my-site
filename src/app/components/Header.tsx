"use client";

import { useEffect, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { PiHamburgerLight } from "react-icons/pi";

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);

  const [showMobileNav, setShowMobileNav] = useState(false);

  const [transparentBackground, setTransparentBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = headerRef.current?.offsetHeight;
      if (headerHeight) {
        if (window.scrollY > headerHeight) {
          setTransparentBackground(true);
        } else {
          setTransparentBackground(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      title: "About",
      target: "about-section",
    },
    {
      title: "Projects",
      target: "projects-section",
    },
    {
      title: "Contact",
      target: "contact-section",
    },
  ];

  return (
    <header
      className={`sticky inset-0 flex items-center justify-between px-12 transition-[padding] duration-200 ease-in-out ${
        transparentBackground
          ? "bg-transparent py-8 backdrop-blur-md md:py-6"
          : "bg-my-blue py-8"
      }`}
      ref={headerRef}
    >
      <a
        href="#hero-section"
        className="group text-xl outline-none md:font-semibold"
      >
        <span className="text-my-red">0. </span>
        <span className="text-my-white">Home</span>
        <div className="h-0.5 w-0 bg-my-red duration-200 ease-in-out group-hover:w-full group-focus:w-full"></div>
      </a>
      <button
        onClick={() => setShowMobileNav((prev) => !prev)}
        className="block text-3xl text-my-red md:hidden"
      >
        {showMobileNav ? <AiOutlineClose /> : <PiHamburgerLight />}
      </button>
      <nav
        className={`fixed inset-0 flex h-screen w-[69%] flex-col items-center justify-center gap-24 bg-my-blue duration-200 ease-in-out md:static md:h-auto md:w-auto md:flex-row md:bg-transparent ${
          showMobileNav ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {navLinks.map((link, index) => (
          <a
            key={link.target}
            href={`#${link.target}`}
            className="group text-xl outline-none md:font-semibold"
          >
            <span className="text-my-red">{index + 1}. </span>
            <span className="text-my-white">{link.title}</span>
            <div className="h-0.5 w-0 bg-my-red duration-200 ease-in-out group-hover:w-full group-focus:w-full"></div>
          </a>
        ))}
      </nav>
    </header>
  );
}
