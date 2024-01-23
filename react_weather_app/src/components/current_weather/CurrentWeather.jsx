import styles from "./CurrentWeather.module.css";
import icon from "../../assets/icons/01d.png"
const CurrentWeather = () => {
  return (
    <div className={styles.weather}>
      <div className={styles.top}>
        <p className={styles.city}>CasaBlanca</p>
        <p className={styles.description}>Cold</p>
      </div>
      <img className={styles.icon} src={icon} alt="icon" />
    </div>
  );
};

export default CurrentWeather;
