import { motion } from "framer-motion";
import { ReactNode } from "react";

type AnimateSlideProps = {
  children: ReactNode;
  direction: "left" | "down";
};

type HiddenVariant = {
  opacity: number;
  translateX?: number;
  translateY?: number;
};

type VisibleVariant = HiddenVariant & {
  transition: {
    delay: number;
  };
};

const AnimateSlide = (props: AnimateSlideProps) => {
  const { children, direction } = props;

  const hidden: HiddenVariant = {
    opacity: 0,
  };

  const visible: VisibleVariant = {
    opacity: 1,
    transition: {
      delay: 0.2,
    },
  };

  if (direction === "left") {
    hidden.translateX = -100;
    visible.translateX = 0;
  } else if (direction === "down") {
    hidden.translateY = -100;
    visible.translateY = 0;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        hidden: hidden,
        visible: visible,
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateSlide;
