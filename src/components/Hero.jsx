import React from "react";
import image from "../assets/my-image.jpg";
import SocialLinks from "./SocialLinks";

const Hero = ({ darkTheme }) => {
  return (
    <div
      className={`relative flex max-h-screen w-screen flex-grow px-4 ${darkTheme ? "bg-gray-800" : "bg-gray-200"}`}
      id="hero"
    >
      <div className="mx-auto -mt-[3.25rem] flex flex-col-reverse justify-center gap-4 md:flex-row md:items-center md:gap-8">
        <div className="w-full text-center md:w-1/2 md:text-right">
          <h2
            className={`text-2xl font-semibold md:text-3xl ${darkTheme ? "text-purple-400 " : "text-purple-900 "}`}
          >
            Hey, there!
          </h2>
          <h1 className="text-3xl font-bold text-purple-600 md:my-2 md:text-5xl">
            Aayush Upreti this side.
          </h1>
          <p className="md:text-xl">
            I am a student passionate about computers and technology. I have
            developed strong skills in frontend development with React JS and
            currently I'm learning fullstack development with Node.
          </p>
        </div>
        <img
          src={image}
          alt="My image"
          className="mx-auto h-auto w-48 rounded-full border-2 border-dashed border-purple-600 md:mx-0 md:w-96 md:rounded-3xl md:border-4"
        />
      </div>
      <SocialLinks />
    </div>
  );
};

export default Hero;
