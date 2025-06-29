import { ReactNode, useMemo, useState } from "react";
import { AppContext } from "./context";
import ClaireDeLune from "../assets/audio/ClairDeLune.mp3";
import { HeaderTitleLabels } from "../types/types";

export const AppContextProvider = (props: { children: ReactNode }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [, setShouldLoop] = useState<boolean>(false);
  const [showSplashPage, setShowSplashPage] = useState(true);
  const [showAboutMePage, setShowAboutMePage] = useState(false);
  const [title, setTitle] = useState<string>(
    HeaderTitleLabels.SOFTWARE_ENGINEER
  );
  const [titles, setTitles] = useState<string[]>(
    Object.values(HeaderTitleLabels)
  );
  const [animate, setAnimate] = useState<boolean>(true);

  const song = useMemo(() => {
    return new Audio(ClaireDeLune);
  }, []);

  song.addEventListener("ended", () => {
    if (song.loop === false) setIsPlaying(false);
  });

  const handlePlayPause = () => {
    if (isPlaying) {
      song.pause();
      setIsPlaying(false);
    } else {
      song.play();
      setIsPlaying(true);
    }
  };

  const handleSongLoop = () => {
    song.loop = !song.loop;
    setShouldLoop(song.loop);
  };

  const handleTitleChange = () => {
    if (animate) return;

    const titleIndex = Math.floor(Math.random() * titles.length);
    const selectedTitle = titles[titleIndex];
    const filteredTitles = titles.filter(
      (currentTitle) => currentTitle !== selectedTitle && currentTitle !== title
    );
    const updatedTitles = filteredTitles.length
      ? filteredTitles
      : Object.values(HeaderTitleLabels);

    setTitle(selectedTitle);
    setTitles(updatedTitles);
    setAnimate(true);
  };

  return (
    <AppContext.Provider
      value={{
        isPlaying,
        setIsPlaying,
        showSplashPage,
        setShowSplashPage,
        showAboutMePage,
        setShowAboutMePage,
        song,
        handlePlayPause,
        handleSongLoop,
        handleTitleChange,
        title,
        animate,
        setAnimate,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
