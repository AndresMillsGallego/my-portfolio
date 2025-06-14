import { AboutMeContentProps } from "../../../utils/aboutMeUtils";
import ComingSoon from "../../ComingSoon/ComingSoon";
import AboutMeContainer from "../AboutMeContainer/AboutMeContainer";

const Adventure = (props: AboutMeContentProps) => {
  const { label } = props;

  return (
    <AboutMeContainer heading={`Adventure!`} aria-label={label}>
      <ComingSoon />
    </AboutMeContainer>
  );
};

export default Adventure;
