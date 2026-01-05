import { Divider, Link, Stack, Tooltip } from "@mui/material";
import { AboutMeContentProps } from "../../../utils/aboutMeUtils";
import AboutMeContainer from "../AboutMeContainer/AboutMeContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { SiGmail } from "react-icons/si";
import style from "../AboutMeContainer/AboutMeContainer.module.scss";
import { useEffect, useState } from "react";
import { motion, useAnimationControls } from "motion/react";

const Connect = (props: AboutMeContentProps) => {
  const { label } = props;
  const controls = useAnimationControls();

  const [animateIcons, setAnimateIcons] = useState(false);
  const [degree, setDegree] = useState(360);

  useEffect(() => {
    setTimeout(() => {
      setAnimateIcons(true);
    }, 1500);
  }, []);

  useEffect(() => {
    if (animateIcons) {
      const updatedDegree = degree === 360 ? 0 : 360;
      controls.start({
        rotate: degree,
        transition: { duration: 0.65 },
      });

      setTimeout(() => {
        setAnimateIcons(false);
        setDegree(updatedDegree);
      }, 900);
    }
  }, [animateIcons, controls, degree]);

  return (
    <AboutMeContainer aria-label={label}>
      <div
        className={style["stack-container"]}
        aria-disabled={animateIcons}
        onClick={() => setAnimateIcons(true)}
      >
        <Stack
          direction="column"
          spacing={4}
          divider={
            <Divider
              orientation="vertical"
              sx={{ borderColor: "black", borderWidth: "1px" }}
              flexItem
            />
          }
        >
          <Tooltip title="My GitHub" placement="top">
            <Link href="https://github.com/AndresMillsGallego" target="_blank">
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                color="black"
                bounce={animateIcons}
              />
            </Link>
          </Tooltip>
          <Tooltip title="Connect on LinkedIn" placement="top">
            <Link
              href="https://www.linkedin.com/in/andres-mills-gallego/"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                color="#0077B5"
                shake={animateIcons}
              />
            </Link>
          </Tooltip>
          <Tooltip title="Send me an email" placement="top">
            <motion.div
              animate={controls}
              className={style["gmail-link-container"]}
            >
              <Link href="mailto:andresmillswork@gmail.com" target="_blank">
                <SiGmail size={25} color="#c71610" />
              </Link>
            </motion.div>
          </Tooltip>
        </Stack>
      </div>
    </AboutMeContainer>
  );
};

export default Connect;
