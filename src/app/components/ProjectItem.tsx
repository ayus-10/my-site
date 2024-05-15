import Image from "next/image";
import Link from "next/link";
import type { ProjectItemDetails } from "./sections/Projects";
import { HiCode, HiOutlineExternalLink } from "react-icons/hi";
import SectionScrollAnimation from "./Animations";

type ProjectItemProps = {
  align: "left" | "right";
  index: number;
} & ProjectItemDetails;

export default function ProjectItem(props: ProjectItemProps) {
  const {
    align,
    index,
    title,
    imageSrc,
    description,
    links: { demo, code },
  } = props;

  return (
    <SectionScrollAnimation>
      <div className="relative flex w-full items-center rounded-sm">
        <div
          className={`h-[360px] w-[640px] overflow-hidden rounded-sm ${align === "left" && "ml-auto"}`}
        >
          <Image
            alt={title}
            src={imageSrc}
            height={360}
            width={640}
            className="rounded-sm duration-300 ease-in-out hover:scale-110"
          />
        </div>
        <div
          className={`absolute top-1/2 z-20 flex h-1/2 w-1/2 -translate-y-1/2 flex-col justify-evenly rounded-sm bg-my-blue-light px-4 py-3 ${align === "left" ? "left-0" : "right-0"}`}
        >
          <div className="text-2xl font-bold">
            <h2 className="inline text-my-red">{index + 1}. </h2>
            <h2 className="inline text-my-white">{title}</h2>
          </div>
          <p className="text-lg text-my-silver">{description}</p>
          <div className="flex items-center gap-4 text-2xl">
            <Link
              href={code}
              aria-label="code repository url"
              className="grid size-[2rem] place-content-center rounded-full bg-my-red text-my-white duration-200 ease-in-out hover:bg-my-white hover:text-my-red"
            >
              <HiCode />
            </Link>
            <Link
              href={demo}
              aria-label="live website url"
              className="grid size-[2rem] place-content-center rounded-full bg-my-red text-my-white duration-200 ease-in-out hover:bg-my-white hover:text-my-red"
            >
              <HiOutlineExternalLink />
            </Link>
          </div>
        </div>
      </div>
    </SectionScrollAnimation>
  );
}
