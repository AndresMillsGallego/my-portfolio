import { useEffect, useContext } from "react";
import style from "./VolumeKnob.module.scss";
import { AppContext } from "../../../Context/context";

const VolumeKnob = () => {
  const { isPlaying, setIsPlaying, song } = useContext(AppContext);

  const startRecord = isPlaying;

  const handleClick = () => {
    setIsPlaying(!isPlaying);

    if (isPlaying) {
      song.pause();
    }
  };

  song.addEventListener("ended", () => setIsPlaying(false));

  useEffect(() => {
    if (startRecord) {
      song.play();
    }
  }, [song, startRecord]);

  return (
    <div
      className={`${style["volume-div"]} ${
        style[isPlaying ? "record-playing" : ""]
      }`}
      onClick={() => handleClick()}
      title="Play me 🎶"
    ></div>
  );
};

export default VolumeKnob;
