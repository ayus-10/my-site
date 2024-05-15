export type ProjectItemDetails = {
  id: number;
  title: string;
  imageSrc: string;
  description: string;
  links: {
    demo: string;
    code: string;
  };
};

export const projectsList: ProjectItemDetails[] = [
  {
    id: 1,
    title: "Anime Showcase Site",
    imageSrc: "/anyflex.jpg",
    description:
      "A Next.js app that lets users explore and save favorite anime to their watchlist, users being authenticated via Discord OAuth.",
    links: {
      demo: "https://any-flex.vercel.app/",
      code: "https://github.com/ayus-10/any-flex",
    },
  },
  {
    id: 2,
    title: "Quiz App",
    imageSrc: "/quizzy.jpg",
    description:
      "A MERN application that lets users make quizzes and generates an ID and password that other people can use to take the quiz.",
    links: {
      demo: "https://quizzy-frontend-flax.vercel.app/",
      code: "https://github.com/ayus-10/quizzy-frontend",
    },
  },
  {
    id: 3,
    title: "E-Commerce Site",
    imageSrc: "/project-x.jpg",
    description:
      "A React app that dynamically loads items and provides item browsing, searching, sorting, viewing, and cart management.",
    links: {
      demo: "https://project-x-five-puce.vercel.app/",
      code: "https://github.com/ayus-10/project-x",
    },
  },
];