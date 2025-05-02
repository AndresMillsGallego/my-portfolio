import style from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { AppContext } from "../../Context/context";

const Header = () => {
  const { setShowSplashPage, setShowPage } = useContext(AppContext);

  const handleIconClick = () => {
    setShowSplashPage(true);
    setShowPage(false);
  };

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
            <span>Software Engineer</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
