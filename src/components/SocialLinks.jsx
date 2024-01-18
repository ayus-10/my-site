import React from "react";
import { TbBrandGithubFilled } from "react-icons/tb";
import { LiaLinkedinIn } from "react-icons/lia";
import { SiMinutemailer } from "react-icons/si";

const SocialLinks = () => {
  const socialLinks = [
    {
      url: "https://github.com/ayus-10",
      icon: <TbBrandGithubFilled />,
      color: "#171515",
    },
    {
      url: "https://www.linkedin.com/in/aayush-upreti-a21945293/",
      icon: <LiaLinkedinIn />,
      color: "#0072b1",
    },
    {
      url: "mailto:contact@aayushupreti.com.np",
      icon: <SiMinutemailer />,
      color: "#db4437",
    },
  ];

  return (
    <div className="absolute bottom-[4vh] left-[2vw] flex flex-col gap-2">
      {socialLinks.map((link, index) => (
        <div
          className="cursor-pointer rounded-full p-2 hover:animate-wiggle"
          style={{ backgroundColor: link.color }}
          key={index}
        >
          <a className="text-3xl text-white md:text-4xl" href={link.url}>
            {link.icon}
          </a>
        </div>
      ))}
    </div>
  );
};

export default SocialLinks;
