import "./LocalForecast.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CityData } from "../../Data/CityData";

const searchCityForecast = () => {
  const [selectedCity, setSelectedCity] = useState();
  const [weatherData, setWeatherData] = useState();

  const handleInput = (ev) => {
    setSelectedCity(ev.target.value);
  };

  useEffect(() => {
    const getData = async () => {
      if (selectedCity) {
        const city = CityData.find((item) => item.city === selectedCity);
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${
            city.lat
          }&lon=${city.lon}&appid=${import.meta.env.VITE_API_KEY}&units=metric`
        );
        const res = await response.json();

        setWeatherData(res.list);
        const filteredData = res.list.filter((forecast) => {
          const date = new Date();
          if (
            parseInt(forecast.dt_txt[8] + forecast.dt_txt[9]) >
              date.getDate() &&
            forecast.dt_txt[11] + forecast.dt_txt[12] === "00"
          ) {
            return forecast;
          }
        });
        setForecastData(filteredData);
        console.log(filteredData);
      }

      getData();
    };
  }, [selectedCity]);

  return (
    <article className="searchCityForecast">
      <section className="selectCityForecast">
        <Link to={`/localForecast`}>
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

export default searchCityForecast;
