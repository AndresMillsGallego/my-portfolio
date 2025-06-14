import { AboutMeContentProps } from "../../../utils/aboutMeUtils";
import AboutMeContainer from "../AboutMeContainer/AboutMeContainer";

const TextContent = (props: AboutMeContentProps) => {
  const { label } = props;

  return (
    <AboutMeContainer heading={`Hi, I'm Andres`} aria-label={label}>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
        asperiores omnis eligendi aliquid distinctio quis cumque, aperiam
        officia dolores consequatur a dolorum id voluptatem ipsam alias iste,
        natus laudantium aspernatur! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ea magni molestias vero aliquam deserunt, voluptatem
        suscipit dignissimos accusantium, sint, laborum neque! Cupiditate nulla
        enim consequatur nostrum soluta. Quos, ex dolores! Lorem ipsum, dolor
        sit amet consectetur adipisicing elit. Repellendus omnis quaerat,
        placeat alias repellat ipsam necessitatibus deleniti quod? Quis porro
        quisquam libero adipisci vitae voluptatem beatae culpa necessitatibus
        cum tempore! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Alias, aliquid. Voluptas quasi neque repellat saepe dicta dolorem
        commodi quas aut ea molestiae, officia accusamus tempora, corrupti
        labore ipsum culpa veniam?
      </p>
    </AboutMeContainer>
  );
};

export default TextContent;
