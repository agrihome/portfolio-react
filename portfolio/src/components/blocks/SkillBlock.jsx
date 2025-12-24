import Text from "../Text";
import { motion } from "motion/react";

export default function SkillBlock({ skill, rating }) {
  return (
    <div className="bg-background-header">
      <Text className="text-white px-10 py-4">{skill}</Text>

      <motion.div
        className="h-1.5 bg-highlight"
        initial={{ width: 0 }}
        animate={{ width: `${(rating / 10) * 100}%` }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          delay: 0.2,
        }}
        view={{
          once: true,
          margin: "50px 0px",
        }}
      ></motion.div>
    </div>
  );
}
