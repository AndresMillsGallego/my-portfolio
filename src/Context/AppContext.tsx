import { ReactNode, useMemo, useState } from "react";
import { AppContext } from "./context";
import ClaireDeLune from "../assets/audio/ClairDeLune.mp3";

export const AppContextProvider = (props: { children: ReactNode }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showSplashPage, setShowSplashPage] = useState(true);
  const [showAboutMePage, setShowAboutMePage] = useState(false);

  const song = useMemo(() => {
    return new Audio(ClaireDeLune);
  }, []);

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
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
