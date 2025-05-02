import { useContext } from "react";
import style from "./App.module.scss";
import { AppContext } from "./Context/context";
import Splash from "./Pages/Splash/Splash";
import { AnimatePresence, motion } from "motion/react";
//import { Backdrop } from "@mui/material";
import MirrorMe from "./assets/MirrorMe.jpg";
import Header from "./components/Header/Header";

function App() {
  const { showPage, setShowPage, showSplashPage } = useContext(AppContext);
  // const [backdropOpen, setBackdropOpen] = useState(false);

  // useEffect(() => {
  //   if (isPlaying) setBackdropOpen(true);
  // }, [isPlaying]);

  return (
    <div className={style["app"]}>
      <Header />
      {/* <Backdrop
        open={backdropOpen}
        onClick={() => setBackdropOpen(false)}
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
      ></Backdrop> */}

      {showSplashPage && !showPage ? <Splash /> : null}

      <AnimatePresence>
        {showPage ? (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <div className={style["page"]}>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                onClick={() => setShowPage(false)}
                className={style["me-div"]}
              >
                <img
                  className={style["me"]}
                  src={MirrorMe}
                  alt="Its a meee Andres"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                onClick={() => setShowPage(false)}
                className={style["content-div"]}
              ></motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default App;
