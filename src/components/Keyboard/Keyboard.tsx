import { useContext } from "react";
import Key from "./Key";
import style from "./Keyboard.module.scss";
import VolumeKnob from "./VolumeKnob/VolumeKnob";
import { AppContext } from "../../Context/context";

const Keyboard = () => {
  const { setShowPage } = useContext(AppContext);

  const handleEnterClick = () => {
    setShowPage(true);
  };

  return (
    <div className={style["keyboard"]}>
      <div className={style["keyboard-left"]}>
        <div className={style["volume-row"]}>
          <Key content="F9" />
          <Key content="F10" />
          <Key content="F11" />
          <Key content="F12" />
          <VolumeKnob />
        </div>
        <div className={style["row"]}>
          <Key content="0" />
          <Key content="-" />
          <Key content="+" />
          <Key
            variant="light"
            keyContainerClass="backspace-key"
            content="⬅ backspace"
          />
        </div>

        <div className={style["row"]}>
          <Key content="L" />
          <Key content=";" />
          <Key content='"' />
          <Key
            variant="highlight"
            keyContainerClass="enter-key"
            content="⏎ enter"
            onClick={handleEnterClick}
          />
        </div>
        <div className={style["row"]}>
          <Key content="." />
          <Key content="/" />
          <Key
            variant="light"
            keyContainerClass="shift-key"
            content="⬆ shift"
          />
        </div>
      </div>
      <div className={style["keyboard-right"]}>
        <div className={style["row"]}>
          <Key variant="light" content="del" />
          <Key variant="light" content="end" />
          <Key variant="light" content="pgdn" />
        </div>
        <div>
          <div className={style["row"]}>
            <Key content="🡁" />
          </div>
          <div className={style["row"]}>
            <Key content="🡀" />
            <Key content="🡃" />
            <Key content="🡂" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
