import "./SearchCity.css";
import React, { useEffect, useState } from "react";
import { CityData } from "../../Data/CityData";
const API_KEY = "24988b61f758c7f57d22813264c36866";

const SearchCity = () => {
  const [selectedCity, setSelectedCity] = useState();
  const [weatherData, setWeatherData] = useState();
  const [iconCode, setIconCode] = useState("");

  const handleInput = (ev) => {
    setSelectedCity(ev.target.value);
  };

  useEffect(() => {
    const getData = async () => {
      if (selectedCity) {
        const city = CityData.find((item) => item.city === selectedCity);
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=${API_KEY}&units=metric`
        );
        const res = await response.json();
        setWeatherData(res);
        setIconCode(res.weather[0].icon);
      }
    };
    getData();
  }, [selectedCity]);

  const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

  return (
    <article className="weatherApp">
      <section>
        <h1>WEATHER APP</h1>
        {/* <h2>Search City</h2> */}
        <select value={selectedCity} onChange={handleInput}>
          <option value="">Select a city</option>
          {CityData.map((city, index) => (
            <option key={index} value={city.city}>
              {city.city}
            </option>
          ))}
        </select>
      </section>

      {weatherData && (
        <section className="data">
          <h3>{weatherData.name}</h3>
          {iconUrl && <img src={iconUrl} alt="weather icon"></img>}
          <h3 className="temp">{Math.round(weatherData.main.temp)} °C</h3>
          <p>{weatherData.weather[0].description}</p>
        </section>
      )}
    </article>
  );
};

export default SearchCity;
