import { Tooltip, Fade } from "@mui/material";
import { motion } from "motion/react";
import { useState } from "react";
import style from "./Skills.module.scss";
import { SkillIconData } from "./data/skillsIconData";

interface SkillIconProps {
  iconData: SkillIconData;
}

const SkillIcon = (props: SkillIconProps) => {
  const { title, Icon, iconProps } = props.iconData;

  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [isTilted, setIsTilted] = useState<boolean>(false);
  const isJiraIcon = title === 'Jira'

  const defaultClassNames = `${style["skill-icon"]} ${
    style[`${title.toLowerCase()}-icon`]
  }`;

  const iconClassName = iconProps.className
    ? `${defaultClassNames} ${style[iconProps.className]}`
    : defaultClassNames;

 
      setInterval(() => {
        if (isJiraIcon) {
          setIsTilted(!isTilted)
        }
        setIsFlipped(!isFlipped)
      }, iconProps.intervalDuration)

    
   

  return (
    <div
      className={style["skill-icon-container"]}
    >
      <Tooltip title={title} slots={{ transition: Fade }} placement="top">
        <motion.div
          className={style["skill-icon-inner-container"]}
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 0, rotate: isJiraIcon && isTilted ? 45 : 0 }}
          transition={{ duration: 0.65, ease: "easeInOut" }}
        >
          <motion.div className={style["skill-icon-front"]}>
            <Icon className={iconClassName} color={iconProps.primaryColor} />
          </motion.div>
          <motion.div className={style["skill-icon-back"]}>
            <Icon className={iconClassName} color={iconProps.secondaryColor} />
          </motion.div>
        </motion.div>
      </Tooltip>
    </div>
  );
};

export default SkillIcon;
