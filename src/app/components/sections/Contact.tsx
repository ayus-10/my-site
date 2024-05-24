import { TbBrandGithubFilled } from "react-icons/tb";
import { HiMail } from "react-icons/hi";
import { TiSocialLinkedin } from "react-icons/ti";
import { ScrollVisibleAnimation } from "../Animations";
import Link from "next/link";

export default function Contact() {
  const contactLinks = [
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/aayush-upreti-a21945293/",
      icon: <TiSocialLinkedin />,
    },
    {
      title: "GitHub",
      url: "https://github.com/ayus-10",
      icon: <TbBrandGithubFilled />,
    },
    {
      title: "Email",
      url: "mailto:aayushupreti03@gmail.com",
      icon: <HiMail />,
    },
  ];

  return (
    <ScrollVisibleAnimation>
      <section
        className="mx-auto flex min-h-screen w-screen max-w-[1200px] flex-col justify-center gap-8 px-6 md:gap-4"
        id="contact-section"
      >
        <div className="max-w-[600px]">
          <h1 className="mb-2 text-2xl font-semibold text-my-red md:text-3xl">
            Contact me
          </h1>
          <p className="text-my-silver md:text-lg">
            Let&apos;s build something awesome together! Or just connect and
            have a chat 💬. Feel free to connect with me on the following
            platforms.
          </p>
        </div>
        <div className="flex flex-col gap-3 md:flex-row">
          {contactLinks.map((link) => (
            <Link
              key={link.title}
              href={link.url}
              aria-label={`url for ${link.title}`}
              className="group flex items-center gap-1"
            >
              <div className="grid size-[1.5rem] place-content-center rounded-full bg-my-red text-lg text-my-white duration-200 ease-in-out group-hover:bg-my-white group-hover:text-my-red md:size-[2.5rem] md:text-3xl">
                {link.icon}
              </div>
              <div className="text-lg font-semibold text-my-white md:hidden">
                {link.title}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </ScrollVisibleAnimation>
  );
}
