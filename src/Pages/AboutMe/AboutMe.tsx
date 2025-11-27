import style from "./AboutMe.module.scss";
import MirrorMe from "../../assets/MirrorMe.jpg";
import { AppContext } from "../../Context/context";
import { useContext, useState } from "react";

import Navigation from "../../components/Navigation/Navigation";
import TextContent from "../../components/AboutMeComponents/TextContent/TextContent";
import { AboutMeLabels } from "../../types/types";
import Skills from "../../components/AboutMeComponents/Skills/Skills";
import Projects from "../../components/AboutMeComponents/Projects/Projects";
import Connect from "../../components/AboutMeComponents/Connect/Connect";
import Adventure from "../../components/AboutMeComponents/Adventure/Adventure";
import { motion } from "motion/react";

const AboutMe = () => {
  const { setShowAboutMePage } = useContext(AppContext);

  const [navValue, setNavValue] = useState(0);

  // const aboutMeNavLabels = Object.values(AboutMeLabels);

  // const getAboutMeComponentIndex = (currentLabel: AboutMeLabels) => {
  //   return aboutMeNavLabels.indexOf(currentLabel);
  // };

  const components = [
    {
      component: <TextContent label={AboutMeLabels.ABOUT_ME_TEXT} />,
    },
    {
      component: <Skills label={AboutMeLabels.ABOUT_ME_SKILLS} />,
    },
    {
      component: <Projects label={AboutMeLabels.ABOUT_ME_PROJECTS} />,
    },
    {
      component: <Adventure label={AboutMeLabels.ABOUT_ME_ADVENTURE} />,
    },
    {
      component: <Connect label={AboutMeLabels.ABOUT_ME_CONNECT} />,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      className={style["page-container"]}
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
          {components[navValue].component}
          <Navigation navValue={navValue} setNavValue={setNavValue} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
