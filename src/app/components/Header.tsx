"use client";

import { Link } from "react-scroll";
import { useEffect, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { PiHamburgerLight } from "react-icons/pi";
import {
  VariantParentAnimation,
  VariantChildAnimation,
  VariantSingleElementAnimation,
} from "./Animations";

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
      className={`sticky inset-0 z-50 flex h-[5.875rem] items-center justify-between px-6 transition-[padding] duration-200 ease-in-out md:px-12 ${
        transparentBackground
          ? `py-8 ${showMobileNav ? "bg-my-blue" : "bg-transparent backdrop-blur-md"} md:py-6`
          : "bg-my-blue py-8"
      }`}
      ref={headerRef}
    >
      <VariantSingleElementAnimation>
        <Link
          spy={true}
          smooth={true}
          duration={200}
          to="hero-section"
          className="group cursor-pointer text-xl outline-none md:font-semibold"
        >
          <span className="text-my-red">0. </span>
          <span className="text-my-white">Home</span>
          <div className="h-0.5 w-0 bg-my-red duration-200 ease-in-out group-hover:w-full group-focus:w-full"></div>
        </Link>
      </VariantSingleElementAnimation>
      <div>
        <VariantSingleElementAnimation>
          <button
            onClick={() => setShowMobileNav((prev) => !prev)}
            className="block text-3xl text-my-red md:hidden"
          >
            {showMobileNav ? <AiOutlineClose /> : <PiHamburgerLight />}
          </button>
        </VariantSingleElementAnimation>
        <VariantParentAnimation>
          <nav
            className={`fixed inset-0 flex h-screen w-[69%] flex-col justify-center gap-24 border-r-[1px] border-my-blue-light bg-my-blue px-12 duration-200 ease-in-out md:static md:h-auto md:w-auto md:flex-row md:items-center md:border-0 md:bg-transparent md:px-0 ${
              showMobileNav
                ? "translate-x-0"
                : "-translate-x-full md:translate-x-0"
            }`}
          >
            {navLinks.map((link, index) => (
              <VariantChildAnimation key={link.target}>
                <Link
                  spy={true}
                  smooth={true}
                  duration={200}
                  to={link.target}
                  onClick={() => setShowMobileNav(false)}
                  className="group cursor-pointer text-xl outline-none md:font-semibold"
                >
                  <span className="text-my-red">{index + 1}. </span>
                  <span className="text-my-white">{link.title}</span>
                  <div className="h-0.5 w-0 bg-my-red duration-200 ease-in-out group-hover:w-full group-focus:w-full"></div>
                </Link>
              </VariantChildAnimation>
            ))}
          </nav>
        </VariantParentAnimation>
      </div>
    </header>
  );
}
