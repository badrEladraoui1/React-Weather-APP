/* eslint-disable no-unused-vars */
import Search from "./components/search/Search";
import CurrentWeather from "./components/current_weather/CurrentWeather";
import { weatherApiUrl } from "./api/api";
import { WeatherApiKey } from "./api/api";
import { useState } from "react";
import "./App.css";
import Forecast from "./components/forecast/Forecast";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    console.log("handleOnSearchChange : ", searchData);
    console.log(searchData.value.split(" "));
    const [lat, long] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${weatherApiUrl}/weather?lat=${lat}&lon=${long}&appid=${WeatherApiKey}&units=metric`
    );

    const forecastWeatherFetch = fetch(
      `${weatherApiUrl}/forecast?lat=${lat}&lon=${long}&appid=${WeatherApiKey}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastWeatherFetch])
      .then(async (response) => {
        const currentWeatherFetchResponse = await response[0].json();
        const forecastWeatherFetchResponse = await response[1].json();

        setCurrentWeather({
          city: searchData.label, // this is the label from the search component
          ...currentWeatherFetchResponse, // we spreed to get a single object
        });
        setForecast({
          city: searchData.label,
          ...forecastWeatherFetchResponse,
        });
      })
      .catch((err) => console.log(err));
  };

  console.log("currentWeather : ", currentWeather);
  console.log("forecast : ", forecast);

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather currentWeather={currentWeather} />}
      {forecast && <Forecast forecast={forecast} />}
    </div>
  );
}

export default App;
