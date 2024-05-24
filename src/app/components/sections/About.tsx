import Image from "next/image";
import { ScrollVisibleAnimation } from "../Animations";
import { FaCaretRight } from "react-icons/fa";

export default function About() {
  const languagesAndFrameworks = [
    "HTML/CSS",
    "JavaScript",
    "TypeScript",
    "React/Next JS",
    "Angular",
    "Node/Nest JS",
    "MongoDB",
    "Python",
  ];

  return (
    <ScrollVisibleAnimation>
      <section
        className="mx-auto flex min-h-screen w-screen max-w-[1200px] flex-col justify-center gap-8 px-6 pt-[6rem] md:flex-row md:items-center md:justify-start md:pt-0"
        id="about-section"
      >
        <div className="group relative ml-4 size-[250px] min-h-[250px] md:ml-0 md:size-[350px] md:min-w-[350px]">
          <Image
            src={"/my-image.jpg"}
            alt="My image"
            fill
            sizes="(min-width: 768px) 350px, 250px"
            priority
            className="absolute z-20 rounded-sm duration-200 ease-in-out group-hover:-translate-x-4 group-hover:translate-y-4"
          ></Image>
          <div className="absolute inset-0 z-10 h-full w-full -translate-x-4 translate-y-4 rounded-sm border-4 border-my-red"></div>
        </div>
        <div className="text-my-silver md:text-lg">
          <h2 className="text-xl font-semibold text-my-red md:mb-2 md:text-3xl">
            About me
          </h2>
          <p className="max-w-[750px]">
            My web development journey began with HTML and CSS in 2021. Since
            then, I&apos;ve leveled up my skills with JavaScript and front-end
            frameworks, solidifying my foundation in front-end development. I
            then moved to backend development with Node.js and MongoDB, building
            cool full-stack projects along the way. Below is the list of
            programming languages and frameworks I am proficient in:
          </p>
          <ul className="my-4 grid grid-cols-2">
            {languagesAndFrameworks.map((item) => (
              <li
                key={item}
                className="flex items-center rounded-sm duration-200 ease-in-out hover:bg-my-blue-light"
              >
                <FaCaretRight className="text-xl text-my-red" />
                <span className="break-words">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </ScrollVisibleAnimation>
  );
}
