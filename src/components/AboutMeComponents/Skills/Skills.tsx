import AboutMeContainer from "../AboutMeContainer/AboutMeContainer";
import Tooltip from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";
import { SkillIconData, skillsIconsData } from "./data/skillsIconData";
import {
  AboutMeContentProps,
  splitSkillsArray,
} from "../../../utils/aboutMeUtils";

import style from "./Skills.module.scss";

interface SkillIconProps {
  iconData: SkillIconData;
}

const Skills = (props: AboutMeContentProps) => {
  const { label } = props;

  const skillsDataRows = splitSkillsArray(skillsIconsData);

  const SkillIcon = (props: SkillIconProps) => {
    const { title, Icon, iconProps } = props.iconData;

    const defaultClassNames = `${style["skill-icon"]} ${
      style[`${title.toLowerCase()}-icon`]
    }`;

    const iconClassName = iconProps.className
      ? `${defaultClassNames} ${style[iconProps.className]}`
      : defaultClassNames;

    return (
      <div className={style["skill-icon-container"]}>
        <Tooltip title={title} slots={{ transition: Fade }} placement="top">
          <Icon className={iconClassName} color={iconProps.color} />
        </Tooltip>
      </div>
    );
  };

  return (
    <AboutMeContainer heading={`My skills`} aria-label={label}>
      <div className={style["container"]}>
        <div className={style["skills-row"]}>
          {skillsDataRows[0].map((skill, index) => (
            <SkillIcon iconData={skill} key={`${skill.title} - ${index}`} />
          ))}
        </div>
        <div className={style["skills-row"]}>
          {skillsDataRows[1].map((skill, index) => (
            <SkillIcon iconData={skill} key={`${skill.title} - ${index}`} />
          ))}
        </div>
      </div>
    </AboutMeContainer>
  );
};

export default Skills;
