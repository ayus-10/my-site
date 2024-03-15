import { motion } from "framer-motion";

const AnimateSlide = ({ children, direction }) => {
  const hidden = {
    opacity: 0,
  };

  const visible = {
    opacity: 1,
    transition: {
      delay: 0.2,
    },
  };

  if (direction === "left") {
    hidden.translateX = "-100px";
    visible.translateX = 0;
  } else if (direction === "down") {
    hidden.translateY = "-100px";
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
