import { createContext } from "react";

export interface AppContextProps {
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  showSplashPage: boolean;
  setShowSplashPage: React.Dispatch<React.SetStateAction<boolean>>;
  showAboutMePage: boolean;
  setShowAboutMePage: React.Dispatch<React.SetStateAction<boolean>>;
  song: HTMLAudioElement;
}

export const AppContext = createContext<AppContextProps>({} as AppContextProps);
