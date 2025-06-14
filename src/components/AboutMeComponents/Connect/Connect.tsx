import { AboutMeContentProps } from "../../../utils/aboutMeUtils";
import ComingSoon from "../../ComingSoon/ComingSoon";
import AboutMeContainer from "../AboutMeContainer/AboutMeContainer";

const Connect = (props: AboutMeContentProps) => {
  const { label } = props;

  return (
    <AboutMeContainer heading={`Let's connect!`} aria-label={label}>
      <ComingSoon />
    </AboutMeContainer>
  );
};

export default Connect;
