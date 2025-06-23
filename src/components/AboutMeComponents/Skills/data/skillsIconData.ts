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
    intervalDuration: number;
  };
}

export const skillsIconsData: SkillIconData[] = [
  {
    title: "TypeScript",
    Icon: TbBrandTypescript,
    iconProps: {
      primaryColor: "#3178c6",
      secondaryColor: "#00273f",
      intervalDuration: 12000
    },
  },
  {
    title: "HTML",
    Icon: TiHtml5,
    iconProps: {
      primaryColor: "#e34c26",
      secondaryColor: "#f06529",
      intervalDuration: 8000
    },
  },
  {
    title: "React",
    Icon: FaReact,
    iconProps: {
      primaryColor: "#0081a3",
      secondaryColor: "#00d8ff",
      intervalDuration: 17000
    },
  },
  {
    title: "GitHub",
    Icon: FaSquareGithub,
    iconProps: {
      primaryColor: "#000000",
      secondaryColor: "#6e5494",
      intervalDuration: 5000
    },
  },
  {
    title: "Java",
    Icon: FaJava,
    iconProps: {
      primaryColor: "#007396",
      secondaryColor: "#ED8B00",
      intervalDuration: 20000
    },
  },
  {
    title: "GraphQL",
    Icon: GrGraphQl,
    iconProps: {
      primaryColor: "#e535ab",
      secondaryColor: "#FFFFFF",
      intervalDuration: 7000
    },
  },
  {
    title: "CSS",
    Icon: DiCss3,
    iconProps: {
      primaryColor: "#264de4",
      secondaryColor: "#663399",
      intervalDuration: 13000
    },
  },
  {
    title: "Springboot",
    Icon: BiLogoSpringBoot,
    iconProps: {
      primaryColor: "#6db33f",
      secondaryColor: "#FFFFFF",
      intervalDuration: 10000
    },
  },
  {
    title: "Git",
    Icon: FaGitSquare,
    iconProps: {
      primaryColor: "F1502F",
      secondaryColor: "#3d2d00",
      intervalDuration: 17000
    },
  },
  {
    title: "Jira",
    Icon: FaJira,
    iconProps: {
      primaryColor: "#2684ff",
      secondaryColor: "#253858",
      intervalDuration: 20000
    },
  },
];
