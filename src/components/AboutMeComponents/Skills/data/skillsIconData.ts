import { TbBrandTypescript } from "react-icons/tb";
import { GrGraphQl } from "react-icons/gr";
import { FaReact, FaJava, FaJira, FaSquareGithub } from "react-icons/fa6";
import { BiLogoSpringBoot } from "react-icons/bi";
import { TiHtml5 } from "react-icons/ti";
import { FaGitSquare } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { IconType } from "react-icons/lib";

export interface SkillIconData {
  title: string;
  Icon: IconType;
  iconProps: {
    className?: string;
    primaryColor: string;
    secondaryColor: string;
  };
}

export const skillsIconsData: SkillIconData[] = [
  {
    title: "TypeScript",
    Icon: TbBrandTypescript,
    iconProps: {
      primaryColor: "#3178c6",
      secondaryColor: "#00273f",
    },
  },
  {
    title: "HTML",
    Icon: TiHtml5,
    iconProps: {
      primaryColor: "#e34c26",
      secondaryColor: "#f06529",
    },
  },
  {
    title: "React",
    Icon: FaReact,
    iconProps: {
      primaryColor: "#0081a3",
      secondaryColor: "#00d8ff",
    },
  },
  {
    title: "GitHub",
    Icon: FaSquareGithub,
    iconProps: {
      primaryColor: "#000000",
      secondaryColor: "#6e5494",
    },
  },
  {
    title: "Java",
    Icon: FaJava,
    iconProps: {
      primaryColor: "#007396",
      secondaryColor: "#ED8B00",
    },
  },
  {
    title: "GraphQL",
    Icon: GrGraphQl,
    iconProps: {
      primaryColor: "#e535ab",
      secondaryColor: "#FFFFFF",
    },
  },
  {
    title: "CSS",
    Icon: DiCss3,
    iconProps: {
      primaryColor: "#264de4",
      secondaryColor: "#663399",
    },
  },
  {
    title: "Springboot",
    Icon: BiLogoSpringBoot,
    iconProps: {
      primaryColor: "#6db33f",
      secondaryColor: "#FFFFFF",
    },
  },
  {
    title: "Git",
    Icon: FaGitSquare,
    iconProps: {
      primaryColor: "F1502F",
      secondaryColor: "#3d2d00",
    },
  },
  {
    title: "Jira",
    Icon: FaJira,
    iconProps: {
      primaryColor: "#2684ff",
      secondaryColor: "#253858",
    },
  },
];
