import styles from "./CurrentWeather.module.css";
import icon from "../../assets/icons/01d.png";
const CurrentWeather = ({ data }) => {
  return (
    <div className={styles.weather}>
      <div className={styles.top}>
        <div>
          <p className={styles.city}>CasaBlanca</p>
          <p className={styles.description}>Cold</p>
        </div>
        <img className={styles.icon} src={icon} alt="icon" />
      </div>
      <div className={styles.bottom}>
        <p className={styles.temperature}>19°C</p>
        <div className={styles.details}>
          <div className={styles.param_row}>
            <span className={styles.param_label.frame}>Details</span>
          </div>
          <div className={styles.param_row}>
            <span className={styles.param_label}>Feels Like</span>
            <span className={styles.param_value}>24°C</span>
          </div>
          <div className={styles.param_row}>
            <span className={styles.param_label}>wind</span>
            <span className={styles.param_value}>2 m/s</span>
          </div>
          <div className={styles.param_row}>
            <span className={styles.param_label}>Humidity</span>
            <span className={styles.param_value}>15%</span>
          </div>
          <div className={styles.param_row}>
            <span className={styles.param_label}>Pressure</span>
            <span className={styles.param_value}>15 hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
