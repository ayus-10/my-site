"use client";

import { Link } from "react-scroll";

type ScrollButtonProps = {
  text: string;
  target: string;
};

export default function ScrollButton(props: ScrollButtonProps) {
  const { text, target } = props;

  return (
    <Link
      spy={true}
      smooth={true}
      duration={200}
      to={target}
      delay={100}
      className="group relative z-10 inline-flex cursor-pointer outline-none"
    >
      <div className="rounded-sm bg-my-red px-4 py-3 text-lg font-bold text-my-white duration-200 ease-in-out group-hover:-translate-x-2 group-hover:translate-y-2 md:text-xl">
        {text}
      </div>
      <div className="absolute inset-0 h-full w-full -translate-x-2 translate-y-2 rounded-sm border-2 border-my-red"></div>
    </Link>
  );
}
