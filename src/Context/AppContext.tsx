import { ReactNode, useMemo, useState } from "react";
import { AppContext } from "./context";
import ClaireDeLune from "../assets/audio/ClairDeLune.mp3";
import { HeaderTitles } from "../types/types";

export const AppContextProvider = (props: { children: ReactNode }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showSplashPage, setShowSplashPage] = useState(true);
  const [showAboutMePage, setShowAboutMePage] = useState(false);
  const [title, setTitle] = useState<string>(HeaderTitles.SOFTWARE_ENGINEER);
  const [titles, setTitles] = useState<string[]>(Object.values(HeaderTitles));
  const [animate, setAnimate] = useState<boolean>(true);

  const song = useMemo(() => {
    return new Audio(ClaireDeLune);
  }, []);

  const handleTitleChange = () => {
    if (animate) return;

    const titleIndex = Math.floor(Math.random() * titles.length);
    const selectedTitle = titles[titleIndex];
    const filteredTitles = titles.filter(
      (currentTitle) => currentTitle !== selectedTitle && currentTitle !== title
    );
    const updatedTitles = filteredTitles.length
      ? filteredTitles
      : Object.values(HeaderTitles);

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
