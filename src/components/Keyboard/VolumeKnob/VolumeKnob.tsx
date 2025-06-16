import { useContext } from "react";
import style from "./VolumeKnob.module.scss";
import { AppContext } from "../../../Context/context";

const VolumeKnob = () => {
  const { isPlaying, handlePlayPause } = useContext(AppContext);

  return (
    <div
      className={`${style["volume-div"]} ${
        style[isPlaying ? "record-playing" : ""]
      }`}
      onClick={() => handlePlayPause()}
      title="Play me 🎶"
    ></div>
  );
};

export default VolumeKnob;
