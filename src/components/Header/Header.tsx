import style from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../Context/context";
import { HeaderTitles } from "../../types/types";

const Header = () => {
  const { setShowSplashPage, setShowPage } = useContext(AppContext);
  const [title, setTitle] = useState<string>(HeaderTitles.SOFTWARE_ENGINEER);
  const [titles, setTitles] = useState<string[]>(Object.values(HeaderTitles));
  const [animate, setAnimate] = useState<boolean>(true);

  const handleIconClick = () => {
    setShowSplashPage(true);
    setShowPage(false);
  };

  const handleTitleClick = () => {
    if (animate) return;

    const titleIndex = Math.floor(Math.random() * titles.length);
    const selectedTitle = titles[titleIndex];
    const filteredTitles = titles.filter(
      (currentTitle) => currentTitle !== selectedTitle && currentTitle !== title
    );
    const updatedTitles = filteredTitles.length
      ? filteredTitles
      : Object.values(HeaderTitles);

    setTitle(selectedTitle);
    setTitles(updatedTitles);
    setAnimate(true);
  };

  useEffect(() => {
    if (animate) {
      setTimeout(() => {
        setAnimate(false);
      }, 2300);
    }
  }, [animate]);

  return (
    <div className={style["header"]}>
      <div className={style["header-title"]}>
        <FontAwesomeIcon
          icon={faCode}
          onClick={() => handleIconClick()}
          className={style["code-icon"]}
        />
        <div className={style["header-name"]}>
          <span>Andres Mills Gallego</span> <br />
          <div className={style["title"]}>
            <span
              className={
                animate ? style["animated-title"] : style["carat-only"]
              }
              onClick={() => handleTitleClick()}
            >
              {title}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
