import { useModeLightContext } from "../../hooks/useModeLightContext";
import { BsBrightnessHigh, BsMoonStars } from "react-icons/bs";
import styles from "./ButtonModeLight.module.css";

const ButtonModeLight = () => {
  const { modeLight, setModeLight } = useModeLightContext();

  if (modeLight) {
    document.body.style.background = "#f2f2f2";
    document.body.style.color = "#333333";
  } else {
    document.body.style.background = "#0f172a";
    document.body.style.color = "#cccccc";
  }

  return (
    <div className={styles.container}>
      {modeLight ? (
        <button onClick={() => setModeLight(false)}>
          <BsMoonStars className={modeLight ? styles.light : styles.dark} />
        </button>
      ) : (
        <button
          className={modeLight ? styles.light : styles.dark}
          onClick={() => setModeLight(true)}
        >
          <BsBrightnessHigh
            className={modeLight ? styles.light : styles.dark}
          />
        </button>
      )}
    </div>
  );
};

export default ButtonModeLight;
