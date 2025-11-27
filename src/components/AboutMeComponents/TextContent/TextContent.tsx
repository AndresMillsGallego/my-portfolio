import { AboutMeContentProps } from "../../../utils/aboutMeUtils";
import AboutMeContainer from "../AboutMeContainer/AboutMeContainer";

const TextContent = (props: AboutMeContentProps) => {
  const { label } = props;

  return (
    <AboutMeContainer heading={`Hi, I'm Andres`} aria-label={label}>
      <p>
        Born in Popayan, Colombia and raised in the Pacific Northwest, my
        upbringing and adult life have always encompassed the duality of two
        cultures, two countries and two languages. Learning to harness and
        express the nuances of my own identity is essential to how I approach
        every aspect of my life from family to career. The intricacies of my
        personal background have served as a template to embrace and celebrate
        the diversity of my own passions and interests.
      </p>
      <p>
        Raised by a woodworker, I grew up alongside my father working in
        carpentry. I learned these skills at a young age and was encouraged to
        follow in his footsteps. Always compelled to build and create, the art
        of woodworking was an ideal match for me for over 25 years. I ran a
        successful business for decades, but as the years went on, I felt a
        strong desire to explore something new.
      </p>
      <p>
        Focused on my dedication to continue building and creating, I was guided
        into the tech industry by my brother-in-law who believed it could be
        perfect fit. I quickly realized, not only was it a perfect fit, but that
        my experience in woodworking facilitated a seamless transition into
        software engineering. After completing a rigorous software development
        bootcamp and year-long Tech Start program, I began my career as a
        software engineer around 5 years ago.
      </p>
      <p>
        I thoroughly love all aspects of the craft and enjoy working in the
        front end, back end and in the cloud when the opportunity arrises.
        Solving problems, from simple to complex, is where I find the most
        enjoyment in my workflow. I approach each day on the job eager to
        contribute, learn and expand my skills. I am currently a Senior Software
        Engineer at Liberty Mutual.
      </p>
    </AboutMeContainer>
  );
};

export default TextContent;
