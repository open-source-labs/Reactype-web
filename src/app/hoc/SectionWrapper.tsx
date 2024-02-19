import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../style";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component: React.FC, idName: string) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer({
          staggerChildren: 0.1,
          delayChildren: 0.2,
        })}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.25,
        }}
        className={`${styles.padding} max-2-7xl mx-auto relative z-0`}
      >
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
