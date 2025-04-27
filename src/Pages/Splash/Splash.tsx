import Keyboard from "../../components/Keyboard/Keyboard";
import style from "./Splash.module.scss";

const Splash = () => {
  return (
    <div className={style["splash-container"]}>
      <Keyboard />
    </div>
  );
};

export default Splash;
