import { AboutMeContentProps } from "../../../utils/aboutMeUtils";
import ComingSoon from "../../ComingSoon/ComingSoon";
import AboutMeContainer from "../AboutMeContainer/AboutMeContainer";

const Projects = (props: AboutMeContentProps) => {
  const { label } = props;

  return (
    <AboutMeContainer heading={`Some of my projects`} aria-label={label}>
      <ComingSoon />
    </AboutMeContainer>
  );
};

export default Projects;
