import "./SearchCity.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CityData } from "../../Data/CityData";
import WeatherData from "../../components/WeatherData/WeatherData";
import SelectCity from "../../components/SelectCity/SelectCity";

const VITE_API_KEY = "24988b61f758c7f57d22813264c36866";

const SearchCity = () => {
  const [selectedCity, setSelectedCity] = useState();
  const [weatherData, setWeatherData] = useState();

  const handleInput = (ev) => {
    setSelectedCity(ev.target.value);
  };

  // useEffect(() => {
  //   const getData = async () => {
  //     if (selectedCity) {
  //       const city = CityData.find((item) => item.city === selectedCity);
  //       const response = await fetch(
  //         `https://api.openweathermap.org/data/2.5/weather?lat=${
  //           city.lat
  //         }&lon=${city.lon}&appid=${import.meta.env.VITE_API_KEY}&units=metric`
  //       );
  //       const res = await response.json();
  //       setWeatherData(res);
  //       setIconCode(res.weather[0].icon);
  //     }
  //   };
  //   getData();
  // }, [selectedCity]);

  useEffect(() => {
    const getData = async () => {
      if (selectedCity) {
        const city = CityData.find((item) => item.city === selectedCity);
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=${VITE_API_KEY}&units=metric`
        );
        const res = await response.json();
        setWeatherData(res);
      }
    };
    getData();
  }, [selectedCity]);

  return (
    <article className="weatherApp">
      {weatherData && (
        <section className="data">
          <h1 className="name">{weatherData.name}</h1>
          <WeatherData weatherData={weatherData} />
        </section>
      )}
      <section className="selectCity">
        <Link to={`/`}>
          <button>Local weather</button>
        </Link>
        <SelectCity
          selectedCity={selectedCity}
          handleInput={handleInput}
          CityData={CityData}
        />
      </section>
    </article>
  );
};

export default SearchCity;
