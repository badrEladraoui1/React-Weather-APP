/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styles from "./CurrentWeather.module.css";
import icon from "../../assets/icons/01d.png";

const CurrentWeather = ({ currentWeather }) => {
  return (
    <div className={styles.weather}>
      <div className={styles.top}>
        <div>
          <p className={styles.city}>{currentWeather.city}</p>
          <p className={styles.description}>
            {currentWeather.weather[0].description}
          </p>
        </div>
        <img
          className={styles.icon}
          // src={`../../assets/icons/${currentWeather.weather[0].icon}`}
          src={`../../assets/icons/${currentWeather.weather[0].icon}.png`} // ! need to fix this
          alt="icon"
        />
      </div>
      <div className={styles.bottom}>
        <p className={styles.temperature}>
          {Math.round(currentWeather.main.temp)} °C
        </p>
        <div className={styles.details}>
          <div className={styles.param_row}>
            <span className={styles.param_label}>Details</span>
          </div>
          <div className={styles.param_row}>
            <span className={styles.param_label}>Feels Like : </span>
            <span className={styles.param_value}>
              {Math.round(currentWeather.main.feels_like)} °C
            </span>
          </div>
          <div className={styles.param_row}>
            <span className={styles.param_label}>wind : </span>
            <span className={styles.param_value}>
              {currentWeather.wind.speed} m/s
            </span>
          </div>
          <div className={styles.param_row}>
            <span className={styles.param_label}>Humidity : </span>
            <span className={styles.param_value}>
              {Math.round(currentWeather.main.humidity)}%
            </span>
          </div>
          <div className={styles.param_row}>
            <span className={styles.param_label}>Pressure : </span>
            <span className={styles.param_value}>
              {currentWeather.main.pressure} hPa
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
