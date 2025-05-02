import Keyboard from "../../components/Keyboard/Keyboard";
import style from "./Splash.module.scss";
import { motion } from "motion/react";

const Splash = () => {
  return (
    <div className={style["splash-container"]}>
      <motion.div
        drag
        dragConstraints={{ top: -115, bottom: 150, left: -450, right: 225 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <Keyboard />
      </motion.div>
    </div>
  );
};

export default Splash;
