"use client";

import { useEffect, useRef, useState } from "react";
import { PiHamburgerBold } from "react-icons/pi";

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);

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
      className={`flex sticky items-center ease-in-out duration-200 inset-0 justify-between px-12 ${
        transparentBackground
          ? "bg-transparent backdrop-blur-md py-6"
          : "bg-my-blue py-8"
      }`}
      ref={headerRef}
    >
      <a
        href="#hero-section"
        className="text-xl group outline-none font-semibold"
      >
        <span className="text-my-red">0. </span>
        <span className="text-my-white">Home</span>
        <div className="w-0 h-0.5 bg-my-red ease-in-out duration-200 group-focus:w-full group-hover:w-full"></div>
      </a>
      <div className="hidden gap-24 md:flex items-center">
        {navLinks.map((link, index) => (
          <a
            key={link.target}
            href={`#${link.target}`}
            className="text-xl group outline-none font-semibold"
          >
            <span className="text-my-red">{index + 1}. </span>
            <span className="text-my-white">{link.title}</span>
            <div className="w-0 h-0.5 bg-my-red ease-in-out duration-200 group-focus:w-full group-hover:w-full"></div>
          </a>
        ))}
      </div>
    </header>
  );
}
