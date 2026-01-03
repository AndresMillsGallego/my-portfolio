import style from "./AboutMe.module.scss";
import MirrorMe from "../../assets/MirrorMe.jpg";
import { AppContext } from "../../Context/context";
import { useContext, useState } from "react";

import TextContent from "../../components/AboutMeComponents/TextContent/TextContent";

import { motion } from "motion/react";
import { AboutMeLabels } from "../../types/types";
import { Grid, Stack } from "@mui/material";

import Connect from "../../components/AboutMeComponents/Connect/Connect";
import Navigation from "../../components/Navigation/Navigation";

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
        <Grid container spacing={2}>
          <Grid size={4}>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              onClick={() => setShowAboutMePage(false)}
              className={style["me-div"]}
            >
              <img
                className={style["me"]}
                src={MirrorMe}
                alt="Its a meee Andres"
              />
            </motion.div>
          </Grid>
          <Grid size={8}>
            <Stack spacing={2}>
              <div className={style["about-me-stack"]}>
                <div className={style["about-me-first-row"]}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    className={style["about-me-div"]}
                  >
                    <TextContent label={AboutMeLabels.ABOUT_ME_TEXT} />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    className={style["connect-div"]}
                  >
                    <Connect label={AboutMeLabels.ABOUT_ME_CONNECT} />
                  </motion.div>
                </div>
                <Navigation navValue={navValue} setNavValue={setNavValue} />
              </div>
            </Stack>
          </Grid>
        </Grid>
      </div>
    </motion.div>
  );
};

export default AboutMe;
