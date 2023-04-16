import "./SearchCity.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CityData } from "../../Data/CityData";
import WeatherData from "../../components/WeatherData/WeatherData";

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
          `https://api.openweathermap.org/data/2.5/weather?lat=${
            city.lat
          }&lon=${city.lon}&appid=${import.meta.env.VITE_API_KEY}&units=metric`
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
      {weatherData && (
        <section className="data">
          <h1 className="name">{weatherData.name}</h1>
          {iconUrl && <img src={iconUrl} alt="weather icon"></img>}

          <WeatherData weatherData={weatherData} />
        </section>
      )}

      <section className="selectCity">
        <Link to={`/`}>
          <button>Local weather</button>
        </Link>
        <select value={selectedCity} onChange={handleInput}>
          <option value="">Select a city</option>
          {CityData.map((city, index) => (
            <option key={index} value={city.city}>
              {city.city}
            </option>
          ))}
        </select>
      </section>
    </article>
  );
};

export default SearchCity;
