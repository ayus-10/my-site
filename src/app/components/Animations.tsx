"use client";

import { motion } from "framer-motion";

const parentVariant = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const childVariant = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export function VariantParentAnimation({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div variants={parentVariant} initial="hidden" animate="visible">
      {children}
    </motion.div>
  );
}

export function VariantChildAnimation({
  children,
}: {
  children: React.ReactNode;
}) {
  return <motion.div variants={childVariant}>{children}</motion.div>;
}

export function VariantSingleElementAnimation({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <VariantParentAnimation>
      <VariantChildAnimation>{children}</VariantChildAnimation>
    </VariantParentAnimation>
  );
}

export function ScrollAppearAnimation({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      style={{ width: "100%" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.7, once: true }}
      transition={{ duration: 0.4 }}
      variants={childVariant}
    >
      {children}
    </motion.div>
  );
}

export function ScrollVisibleAnimation({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.section
      style={{ width: "100%" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.7, once: true }}
      transition={{ duration: 0.4 }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
    >
      {children}
    </motion.section>
  );
}
