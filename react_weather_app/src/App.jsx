import Search from "./components/search/Search";
import CurrentWeather from "./components/current_weather/CurrentWeather";
import "./App.css";

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log("handleOnSearchChange : ", searchData);
  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather />
    </div>
  );
}

export default App;
