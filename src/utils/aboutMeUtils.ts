import { SkillIconData } from "../components/AboutMeComponents/Skills/data/skillsIconData";
import { AboutMeLabels } from "../types/types";

export interface AboutMeContentProps {
  label: AboutMeLabels;
}

export const splitSkillsArray = (skills: SkillIconData[]) => {
  if (!skills.length) return [];

  const midpoint = Math.ceil(skills.length / 2);

  return [skills.slice(0, midpoint), skills.slice(midpoint)];
};

export const shuffleSkills = (skills: SkillIconData[]) => {
  const combinedSkills = skills.flat();
  const shuffledSkills = combinedSkills.sort(() => Math.random() - 0.5);

  return splitSkillsArray(shuffledSkills);
};
