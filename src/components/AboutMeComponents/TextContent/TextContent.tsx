import { useContext } from "react";
import { AppContext } from "../../../Context/context";
import { AboutMeContentProps } from "../../../utils/aboutMeUtils";
import { Skeleton } from "@mui/material";
import AboutMeContainer from "../AboutMeContainer/AboutMeContainer";
import style from "./TextContent.module.scss";

const TextContent = (props: AboutMeContentProps) => {
  const { label } = props;
  const { animate, title, handleTitleChange } = useContext(AppContext);

  const Title = () => {
    return (
      <div className={style["title-component"]}>
        {animate ? (
          <Skeleton className={style["skeleton"]} />
        ) : (
          <span className={style["title"]} onClick={handleTitleChange}>
            {title.toLowerCase()}
          </span>
        )}
      </div>
    );
  };

  return (
    <AboutMeContainer aria-label={label}>
      <h2>Hi, I'm Andres</h2>
      <p className={style["about-me-paragraph"]}>
        <span className={style["title-string"]}>
          I'm a <Title /> who simply loves to build things.
        </span>{" "}
        Whether it's a complex application or a weekend project, I enjoy the
        process of creating something functional from scratch.
      </p>
      <p className={style["about-me-paragraph"]}>
        When not at work, my favorite way to spend time is exploring the world
        and enjoying music with my family. Whether we are traveling to new
        places or sharing our favorite songs, we are always looking for our next
        adventure
      </p>
    </AboutMeContainer>
  );
};

export default TextContent;
