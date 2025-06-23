import AboutMeContainer from "../AboutMeContainer/AboutMeContainer";

import { skillsIconsData } from "./data/skillsIconData";
import {
  AboutMeContentProps,
  splitSkillsArray,
} from "../../../utils/aboutMeUtils";

import style from "./Skills.module.scss";
import SkillIcon from "./SkillIcon";

const Skills = (props: AboutMeContentProps) => {
  const { label } = props;

  const skillsDataRows = splitSkillsArray(skillsIconsData);

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
