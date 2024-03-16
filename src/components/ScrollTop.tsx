import { MdKeyboardArrowUp } from "react-icons/md";
import { Link } from "react-scroll";

const ScrollTop = ({ visibility }: { visibility: boolean }) => {
  return (
    <Link
      className={`fixed bottom-[4vh] right-[2vw] z-20 cursor-pointer rounded-full bg-purple-600 text-5xl duration-200 ease-in-out hover:bg-purple-700 md:text-6xl ${visibility ? "animate-fadeIn" : "animate-fadeOut"}`}
      to="home"
      href="#home"
      id="scrollTop"
      spy={true}
      smooth={true}
      duration={500}
    >
      <MdKeyboardArrowUp className="text-white" />
    </Link>
  );
};

export default ScrollTop;
