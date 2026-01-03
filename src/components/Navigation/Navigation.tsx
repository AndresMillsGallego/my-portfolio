import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import ConstructionIcon from "@mui/icons-material/Construction";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import style from "./Navigation.module.scss";

interface NavigationProps {
  navValue: number;
  setNavValue: React.Dispatch<React.SetStateAction<number>>;
}

const Navigation = (props: NavigationProps) => {
  const { navValue, setNavValue } = props;

  return (
    <div className={style["navigation-container"]}>
      <BottomNavigation
        showLabels
        className={style["navigation"]}
        value={navValue}
        onChange={(_event, newValue) => setNavValue(newValue)}
      >
        <BottomNavigationAction
          label="Projects"
          icon={<ConstructionIcon className={style["nav-icon"]} />}
        />
        <BottomNavigationAction
          label="About Me"
          icon={
            navValue === 1 ? (
              <SentimentVerySatisfiedIcon className={style["nav-icon"]} />
            ) : (
              <SentimentSatisfiedIcon className={style["nav-icon"]} />
            )
          }
        />
      </BottomNavigation>
    </div>
  );
};

export default Navigation;
