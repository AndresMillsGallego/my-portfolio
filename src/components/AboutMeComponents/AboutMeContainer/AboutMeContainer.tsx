import React from "react";
import style from "./AboutMeContainer.module.scss";
import { AnimatePresence, motion } from "motion/react";

interface AboutMeContainerProps {
  children: React.ReactNode;
}

const AboutMeContainer = (props: AboutMeContainerProps) => {
  const { children } = props;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        className={style["content-div"]}
      >
        <div className={style["about-me-content"]}>{children}</div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AboutMeContainer;
