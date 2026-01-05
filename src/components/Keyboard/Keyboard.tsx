import { useCallback, useContext, useEffect, useState } from "react";
import Key from "./Key";
import style from "./Keyboard.module.scss";
import VolumeKnob from "./VolumeKnob/VolumeKnob";
import { AppContext } from "../../Context/context";
import { motion } from "motion/react";
import { KeyValues, TiltValues } from "../../types/types";
import { defaultTiltValues, getTiltValue } from "../../utils/keyboardUtils";

const Keyboard = () => {
  const { setShowAboutMePage, handleTitleChange, handleSongLoop, animate } =
    useContext(AppContext);

  const [tilt, setTilt] = useState<TiltValues>(defaultTiltValues);

  const handleEnterClick = useCallback(() => {
    setShowAboutMePage(true);
  }, [setShowAboutMePage]);

  useEffect(() => {
    const onKeyDown = (event: { key: string }) => {
      const keyName = event.key;
      console.log("Key name", keyName);
      setTilt(getTiltValue(keyName));

      if (keyName === KeyValues.ENTER) {
        handleEnterClick();
      } else if (keyName === KeyValues.SHIFT && !animate) {
        console.log("yo");
        handleTitleChange();
      }
    };
    const onKeyUp = () =>
      setTilt({ x: 0, y: 0, shadow: "0px 5px 10px rgba(0,0,0,0.2)" });

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, [animate, handleEnterClick, handleTitleChange]);

  return (
    <motion.div
      className={style["keyboard"]}
      style={{ perspective: 1000 }}
      animate={{ rotateX: tilt.x, rotateY: tilt.y, boxShadow: tilt.shadow }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className={style["keyboard-left"]}>
        <div className={style["volume-row"]}>
          <div className={style["f8-key-container"]}>
            <Key content="F8" />
          </div>
          <Key content="F9" />
          <Key content="F10" />
          <Key content="F11" />
          <Key
            isActionKey
            content="F12"
            title="Loop song"
            onClick={handleSongLoop}
          />
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
            isActionKey
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
            isActionKey
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
            <Key
              isActionKey
              content="🡁"
              onMouseDown={() => setTilt(getTiltValue(KeyValues.ARROW_UP))}
              onMouseUp={() => setTilt(defaultTiltValues)}
            />
          </div>
          <div className={style["row"]}>
            <Key
              isActionKey
              content="🡀"
              onMouseDown={() => setTilt(getTiltValue(KeyValues.ARROW_LEFT))}
              onMouseUp={() => setTilt(defaultTiltValues)}
            />
            <Key
              isActionKey
              content="🡃"
              onMouseDown={() => setTilt(getTiltValue(KeyValues.ARROW_DOWN))}
              onMouseUp={() => setTilt(defaultTiltValues)}
            />
            <Key
              isActionKey
              content="🡂"
              onMouseDown={() => setTilt(getTiltValue(KeyValues.ARROW_RIGHT))}
              onMouseUp={() => setTilt(defaultTiltValues)}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Keyboard;
