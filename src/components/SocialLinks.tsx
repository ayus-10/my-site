import { TbBrandGithubFilled } from "react-icons/tb";
import { LiaLinkedinIn } from "react-icons/lia";
import { SiMinutemailer } from "react-icons/si";

const SocialLinks = () => {
  const socialLinks = [
    {
      title: "GitHub",
      url: "https://github.com/ayus-10",
      icon: <TbBrandGithubFilled />,
      color: "#333",
    },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/aayush-upreti-a21945293/",
      icon: <LiaLinkedinIn />,
      color: "#0a66c2",
    },
    {
      title: "Email",
      url: "mailto:contact@aayushupreti.com.np",
      icon: <SiMinutemailer />,
      color: "#ea4335",
    },
  ];

  return (
    <div className="absolute bottom-[2vw] left-[2vw] flex gap-2 md:flex-col">
      {socialLinks.map((link, index) => (
        <span
          className="cursor-pointer rounded-full p-2 duration-500 ease-in-out hover:scale-125"
          style={{ backgroundColor: link.color }}
          key={index}
        >
          <a
            aria-label={`${link.title} Link`}
            className="text-3xl text-white md:text-4xl"
            href={link.url}
          >
            {link.icon}
          </a>
        </span>
      ))}
    </div>
  );
};

export default SocialLinks;
