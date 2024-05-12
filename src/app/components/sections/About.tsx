import Image from "next/image";
import { RiArrowDropRightFill } from "react-icons/ri";
import SectionScrollAnimation from "../Animations";

export default function About() {
  const languagesAndFrameworks = [
    "HTML/CSS",
    "JavaScript",
    "TypeScript",
    "React/NextJS",
    "Angular",
    "Express/NestJS",
    "MongoDB",
    "Python",
  ];

  return (
    <SectionScrollAnimation>
      <section
        className="mx-auto -mt-[5.875rem] flex h-screen w-screen max-w-[1200px] flex-col items-center justify-center gap-8 md:flex-row md:justify-start"
        id="about-section"
      >
        <div className="group relative size-[277px] min-h-[277px] md:size-[333px] md:min-w-[333px]">
          <Image
            src={"/my-image.jpg"}
            alt="My image"
            fill
            sizes="(min-width: 768px) 333px, 277px"
            priority
            className="absolute z-20 rounded-sm duration-200 ease-in-out group-hover:-translate-x-4 group-hover:translate-y-4"
          ></Image>
          <div className="absolute inset-0 z-10 h-full w-full -translate-x-4 translate-y-4 rounded-sm border-4 border-my-red"></div>
        </div>
        <div className="px-12 text-my-silver md:text-lg">
          <h2 className="text-xl font-semibold text-my-red md:mb-2 md:text-3xl">
            About me
          </h2>
          <p className="max-w-[750px]">
            My web development journey began with HTML and CSS in 2021. Since
            then, I&apos;ve worked on my skills, learned JavaScript and
            front-end frameworks, building my foundations in front-end
            development. Transitioning to backend development, I started with
            Node.js and MongoDB. Combining these skills, I&apos;ve built some
            impressive projects. Below is the list of programming languages and
            frameworks I am proficient in:
          </p>
          <ul className="my-4 grid grid-cols-2">
            {languagesAndFrameworks.map((item) => (
              <li
                key={item}
                className="flex items-center gap-1 rounded-sm duration-200 ease-in-out hover:bg-my-blue-light"
              >
                <RiArrowDropRightFill className="text-2xl text-my-red" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </SectionScrollAnimation>
  );
}
