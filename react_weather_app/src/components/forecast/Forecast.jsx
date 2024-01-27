/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from "./Forecast.module.css";

const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const Forecast = ({ forecast }) => {
  const dayInTheWeek = new Date().getDay();
  // here we are getting all the days, except the current one. for the forecast
  const FirstHalf = DAYS.slice(0, dayInTheWeek);
  const lastHalf = DAYS.slice(dayInTheWeek, DAYS.length);
  const forecastDays = FirstHalf.concat(lastHalf);
  console.log(forecastDays);
  // console.log(dayInTheWeek);
  return (
    <>
      <label className={styles.title}>Forecasts</label>
      <Accordion allowZeroExpanded>
        {forecast.list.splice(0, 7).map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className={styles.dailyItem}>
                  {console.log(index)}
                  <img
                    className={styles.icon}
                    src={`../../assets/icons/${item.weather[0].icon}.png`}
                    alt="icon"
                  />
                  <label className={styles.day}>{forecastDays[index]}</label>
                  <label className={styles.description}>
                    {item.weather[0].description}
                  </label>
                  <label className={styles.temp_min_max}>
                    {Math.round(item.main.temp_min)} °C
                  </label>
                  <label className={styles.temp_min_max}>
                    {Math.round(item.main.temp_max)} °C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className={styles.detailsGrid}>
                <div className={styles.detailsGridItem}>
                  <label>Pressure</label>
                  <label>{item.main.pressure} hPa</label>
                </div>
                <div className={styles.detailsGridItem}>
                  <label>Humidity</label>
                  <label>{item.main.humidity}%</label>
                </div>
                <div className={styles.detailsGridItem}>
                  <label>Clouds</label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className={styles.detailsGridItem}>
                  <label>Wind Speed</label>
                  <label>{item.wind.speed} m/s</label>
                </div>
                <div className={styles.detailsGridItem}>
                  <label>Sea Level</label>
                  <label>{item.main.sea_level} m</label>
                </div>
                <div className={styles.detailsGridItem}>
                  <label>Feels Like</label>
                  <label>{Math.round(item.main.feels_like)}°C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
