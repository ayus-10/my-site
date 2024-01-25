import { FaHtml5, FaReact, FaPython } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { IoLogoCss3 } from "react-icons/io";
import { FaGitAlt } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

export const skillItems = [
  {
    name: "HTML",
    image: <FaHtml5 />,
    color: "#f06529",
  },
  {
    name: "CSS",
    image: <IoLogoCss3 />,
    color: "#2965f1",
  },
  {
    name: "JavaScript",
    image: <RiJavascriptFill />,
    color: "#f7df1e",
  },
  {
    name: "React JS",
    image: <FaReact />,
    color: "#00d8ff",
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
];
