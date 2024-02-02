import quizzy1 from "../assets/quizzy1.png";
import quizzy2 from "../assets/quizzy2.png";
import quizzy3 from "../assets/quizzy3.png";
import splash1 from "../assets/splash1.jpg";
import splash2 from "../assets/splash2.jpg";
import splash3 from "../assets/splash3.jpg";
import x1 from "../assets/x1.jpg";
import x2 from "../assets/x2.jpg";
import x3 from "../assets/x3.jpg";

const projectItems = [
  {
    title: "Quiz App",
    description:
      "A MERN application that lets users make quizzes and generates an ID and password that other people can use to take the quiz.",
    images: [quizzy1, quizzy2, quizzy3],
    links: {
      code: "https://github.com/ayus-10/quizzy-frontend",
      demo: "https://quizzy-frontend-flax.vercel.app/",
    },
  },
  {
    title: "Portfolio Page",
    description:
      "A React JS powered personal portfolio template - includes a custom image carousel for showcasing your projects.",
    images: [splash1, splash2, splash3],
    links: {
      code: "https://github.com/ayus-10/splash",
      demo: "https://splash-liart.vercel.app/",
    },
  },
  {
    title: "E-Commerce Site",
    description:
      "A React app that dynamically loads items and provides item browsing, searching, sorting, viewing, and cart management.",
    images: [x1, x2, x3],
    links: {
      code: "https://github.com/ayus-10/project-x",
      demo: "https://project-x-five-puce.vercel.app/",
    },
  },
];

export default projectItems;
