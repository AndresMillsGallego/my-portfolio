import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import ConstructionIcon from "@mui/icons-material/Construction";
import StarIcon from "@mui/icons-material/Star";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
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
        onChange={(event, newValue) => setNavValue(newValue)}
      >
        <BottomNavigationAction
          label="About Me"
          icon={
            navValue === 0 ? (
              <SentimentVerySatisfiedIcon />
            ) : (
              <SentimentSatisfiedIcon />
            )
          }
        />
        <BottomNavigationAction label="Skills" icon={<StarIcon />} />
        <BottomNavigationAction label="Projects" icon={<ConstructionIcon />} />
        <BottomNavigationAction label="Connect" icon={<ContactPageIcon />} />
        <BottomNavigationAction
          label="Adventure"
          icon={<TravelExploreIcon />}
        />
      </BottomNavigation>
    </div>
  );
};

export default Navigation;
