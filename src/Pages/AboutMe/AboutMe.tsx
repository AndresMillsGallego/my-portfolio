import { motion } from "motion/react";
import style from "./AboutMe.module.scss";
import MirrorMe from "../../assets/MirrorMe.jpg";
import { AppContext } from "../../Context/context";
import { useContext, useState } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import ConstructionIcon from "@mui/icons-material/Construction";
import StarIcon from "@mui/icons-material/Star";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";

const AboutMe = () => {
  const { setShowAboutMePage } = useContext(AppContext);

  const [navValue, setNavValue] = useState(0);

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
          <div className={style["about-me-container"]}>
            <h2 className={style["about-me-header"]}>Hi, I'm Andres</h2>
            <p className={style["about-me-content"]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              aspernatur cum delectus soluta autem dignissimos eaque atque
              eveniet ea, voluptatum aliquam odio dolorem cupiditate id, sit ut
              sint voluptas quis. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quae aspernatur cum delectus soluta autem
              dignissimos eaque atque eveniet ea, voluptatum aliquam odio
              dolorem cupiditate id, sit ut sint voluptas quis. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Vitae cum nobis
              maiores ratione eos quas repellendus dolorum! Sint libero sit a.
              Veniam necessitatibus commodi saepe blanditiis. Accusantium
              commodi in repellendus? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Molestiae quasi officia debitis voluptates,
              animi nulla molestias soluta voluptatem omnis, aliquid beatae
              alias harum! Deserunt, dolorem corrupti. Non ad veniam vel.
            </p>
          </div>
          <BottomNavigation
            className={style["background-nav"]}
            showLabels
            value={navValue}
            onChange={(event, newValue) => setNavValue(newValue)}
          >
            <BottomNavigationAction
              label="About Me"
              icon={
                navValue === 0 ? (
                  <SentimentVerySatisfiedIcon />
                ) : (
                  <SentimentSatisfiedIcon />
                )
              }
              onFocus={(event) => console.log("focused!", event)}
            />
            <BottomNavigationAction label="Skills" icon={<StarIcon />} />
            <BottomNavigationAction
              label="Projects"
              icon={<ConstructionIcon />}
            />
            <BottomNavigationAction
              label="Connect"
              icon={<ContactPageIcon />}
            />
            <BottomNavigationAction
              label="Adventure"
              icon={<TravelExploreIcon />}
            />
          </BottomNavigation>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
