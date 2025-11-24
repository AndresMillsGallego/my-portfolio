import { useContext } from "react";
import Key from "./Key";
import style from "./Keyboard.module.scss";
import VolumeKnob from "./VolumeKnob/VolumeKnob";
import { AppContext } from "../../Context/context";

const Keyboard = () => {
  const { setShowAboutMePage, handleTitleChange, handleSongLoop } =
    useContext(AppContext);

  const handleEnterClick = () => {
    setShowAboutMePage(true);
  };

  return (
    <div className={style["keyboard"]}>
      <div className={style["keyboard-left"]}>
        <div className={style["volume-row"]}>
          <div className={style["f8-key-container"]}>
            <Key content="F8" />
          </div>
          <Key content="F9" />
          <Key content="F10" />
          <Key content="F11" />
          <Key content="F12" title="song loop" onClick={handleSongLoop} />
          <VolumeKnob />
        </div>
        <div className={style["row"]}>
          <Key content="8" />
          <Key content="9" />
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
          <Key content="K" />
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
          <Key content="M" />
          <Key content="," />
          <Key content="." />
          <Key content="/" />
          <Key
            variant="light"
            keyContainerClass="shift-key"
            content="⬆ shift"
            onClick={handleTitleChange}
            title="What else am I?"
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
