import React from "react";
import image from "../assets/my-image.jpg";
import SocialLinks from "./SocialLinks";

const Hero = () => {
  return (
    <div
      className="relative flex max-h-screen w-screen flex-grow bg-gray-200 px-4"
      id="hero"
    >
      <div className="-mt-[3.25rem] flex flex-col-reverse justify-center gap-4 md:flex-row md:items-center">
        <div className="w-full text-center md:w-1/2 md:text-right">
          <h2 className="text-3xl font-semibold text-purple-950 md:text-3xl">
            Hey, there!
          </h2>
          <h1 className="my-2 text-4xl font-bold text-purple-600 md:text-5xl">
            Aayush Upreti, this side.
          </h1>
          <p className="text-lg md:text-xl">
            I am a student passionate about computers and technology. I have
            developed strong skills in frontend development with React JS and
            currently I'm learning fullstack development with Node.
          </p>
        </div>
        <img
          src={image}
          alt="My image"
          className="mx-auto h-auto w-48 rounded-full md:mx-0 md:w-96 md:rounded-3xl"
        />
      </div>
      <SocialLinks />
    </div>
  );
};

export default Hero;
