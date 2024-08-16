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
    title: "Messaging App (Coming Soon)",
    imageSrc: "/messagingapp.png",
    description:
      "A real-time messaging app built using Next.js and GraphQL, enabling users to easily chat with friends.",
    links: {
      demo: "https://example.com",
      code: "https://example.com",
    },
  },
  {
    id: 2,
    title: "Quiz App",
    imageSrc: "/quizzy.png",
    description:
      "A MERN application that lets users make quizzes and generates an ID and password that other people can use to take the quiz.",
    links: {
      demo: "https://quizzy-frontend-ten.vercel.app/",
      code: "https://github.com/ayus-10/quizzy-frontend",
    },
  },
  {
    id: 3,
    title: "Blogging Platform",
    imageSrc: "/blogit.jpg",
    description:
      "A blogging app built with Angular and NestJS, featuring user authentication and blog creation with image uploads.",
    links: {
      demo: "https://blog-it-frontend-phi.vercel.app/",
      code: "https://github.com/ayus-10/blog-it-frontend",
    },
  },
];
