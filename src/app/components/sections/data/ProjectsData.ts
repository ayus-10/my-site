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
    title: "Blogging Platform",
    imageSrc: "/blogit.jpg",
    description:
      "A blogging app built with Angular and NestJS, featuring user authentication and blog creation with image uploads.",
    links: {
      demo: "https://blog-it-frontend-phi.vercel.app/",
      code: "https://github.com/ayus-10/blog-it-frontend",
    },
  },
  {
    id: 2,
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
    id: 3,
    title: "Quiz App",
    imageSrc: "/quizzy.jpg",
    description:
      "A MERN application that lets users make quizzes and generates an ID and password that other people can use to take the quiz.",
    links: {
      demo: "https://quizzy-frontend-flax.vercel.app/",
      code: "https://github.com/ayus-10/quizzy-frontend",
    },
  },
];
