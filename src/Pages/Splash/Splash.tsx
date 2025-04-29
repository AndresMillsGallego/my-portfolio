import { useRef } from "react";
import Keyboard from "../../components/Keyboard/Keyboard";
import style from "./Splash.module.scss";
import { motion } from "motion/react";

const Splash = () => {
  const dragConstraintRef = useRef(null);

  return (
    <motion.div className={style["splash-container"]} ref={dragConstraintRef}>
      <motion.div drag dragConstraints={dragConstraintRef}>
        <Keyboard />
      </motion.div>
    </motion.div>
  );
};

export default Splash;
