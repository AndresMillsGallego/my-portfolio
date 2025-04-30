import style from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className={style["header"]}>
      <div className={style["header-title"]}>
        <FontAwesomeIcon icon={faCode} />
        <div className={style["header-name"]}>
          <span>Andres Mills Gallego</span> <br />
          <span>Software Engineer</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
