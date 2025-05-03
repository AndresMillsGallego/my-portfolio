import style from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect } from "react";
import { AppContext } from "../../Context/context";

const Header = () => {
  const { setShowSplashPage, setShowAboutMePage, title, animate, setAnimate } =
    useContext(AppContext);

  const handleIconClick = () => {
    setShowSplashPage(true);
    setShowAboutMePage(false);
  };

  useEffect(() => {
    if (animate) {
      setTimeout(() => {
        setAnimate(false);
      }, 2300);
    }
  }, [animate, setAnimate]);

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
