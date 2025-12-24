import { motion } from "motion/react";

export default function StaggerText({ children, className = "", delay = 0 }) {
  const text =
    typeof children === "string" ? children : children?.toString() || "";
  const letters = Array.from(text);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay * i,
      },
    }),
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.span
      style={{ display: "inline-flex", flexWrap: "wrap" }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20px 0px" }}
      className={className}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={childVariants}
          style={{ display: "inline-block", whiteSpace: "pre" }}
          viewport={{ once: true, margin: "-20px 0px" }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
}
