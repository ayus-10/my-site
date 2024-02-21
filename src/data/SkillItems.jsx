import { FaReact, FaPython } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";

export const skillItems = [
  {
    name: "JavaScript",
    image: <RiJavascriptFill />,
    color: "#f7df1e",
  },
  {
    name: "TypeScript",
    image: <BiLogoTypescript />,
    color: "#007acc",
  },
  {
    name: "React JS",
    image: <FaReact />,
    color: "#00d8ff",
  },
  {
    name: "Next JS",
    image: <TbBrandNextjs />,
    color: "#333",
    altColor: "#fff",
  },
  {
    name: "Express JS",
    image: <SiExpress />,
    color: "#333",
    altColor: "#fff",
  },
  {
    name: "Mongo DB",
    image: <DiMongodb />,
    color: "#589636",
  },
  {
    name: "Python",
    image: <FaPython />,
    color: "#4584b6",
  },
  {
    name: "Git",
    image: <FaGitAlt />,
    color: "#c9510c",
  },
];
