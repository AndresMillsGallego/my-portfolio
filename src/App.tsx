import style from "./App.module.scss";
import Splash from "./Pages/Splash/Splash";

function App() {
  return (
    <div className={style["app"]}>
      <Splash />
    </div>
  );
}

export default App;
