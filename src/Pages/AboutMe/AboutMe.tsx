import { motion } from "motion/react";
import style from "./AboutMe.module.scss";
import MirrorMe from "../../assets/MirrorMe.jpg";
import { AppContext } from "../../Context/context";
import { useContext } from "react";

const AboutMe = () => {
  const { setShowAboutMePage } = useContext(AppContext);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
    >
      <div className={style["page"]}>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={() => setShowAboutMePage(false)}
          className={style["me-div"]}
        >
          <img className={style["me"]} src={MirrorMe} alt="Its a meee Andres" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className={style["content-div"]}
        >
          <h2 className={style["about-me-header"]}>About Me</h2>
          <p className={style["about-me-content"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            aspernatur cum delectus soluta autem dignissimos eaque atque eveniet
            ea, voluptatum aliquam odio dolorem cupiditate id, sit ut sint
            voluptas quis. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quae aspernatur cum delectus soluta autem dignissimos eaque
            atque eveniet ea, voluptatum aliquam odio dolorem cupiditate id, sit
            ut sint voluptas quis.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
