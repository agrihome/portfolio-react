import { motion } from "motion/react";

export default function Reveal({
  children,
  className = "",
  initial = { opacity: 0, x: -10 },
  whileInView = { opacity: 1, x: 0 },
  transition = {
    type: "spring",
    mass: 1,
    stiffness: 100,
    damping: 15,
    duration: 0.5,
  },
  viewport = { once: true,margin: "-20px 0px" },
}) {
  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      transition={transition}
      viewport={viewport}
      className={className}
    >
      {children}
    </motion.div>
  );
}
