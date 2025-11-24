import { useRef } from "react";
import Keyboard from "../../components/Keyboard/Keyboard";
import style from "./Splash.module.scss";
import { motion } from "motion/react";

const Splash = () => {
  const constraintsRef = useRef(null);

  return (
    <div className={style["splash-container"]} ref={constraintsRef}>
      <motion.div
        drag
        dragConstraints={constraintsRef}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <Keyboard />
      </motion.div>
    </div>
  );
};

export default Splash;
