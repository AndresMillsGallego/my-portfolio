import Keyboard from "../../components/Keyboard/Keyboard";
import style from "./Splash.module.scss";
import { motion } from "motion/react";

const Splash = () => {
  return (
    <div className={style["splash-container"]}>
      <motion.div drag dragMomentum={false}>
        <Keyboard />
      </motion.div>
    </div>
  );
};

export default Splash;
