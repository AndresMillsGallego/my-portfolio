import { useEffect, useMemo, useState } from "react";
import style from "./VolumeKnob.module.scss";
import ClaireDeLune from "../../../assets/audio/ClairDeLune.mp3";

const VolumeKnob = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const song = useMemo(() => {
    return new Audio(ClaireDeLune);
  }, []);

  const startRecord = isPlaying;

  const handleClick = () => {
    setIsPlaying(!isPlaying);

    if (isPlaying) {
      song.pause();
    }
  };

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
