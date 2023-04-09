import "./Home.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = ({ setLocation, location }) => {
  const [iconCode, setIconCode] = useState("");
  const [weatherData, setWeatherData] = useState();

  useEffect(() => {
    const getData = async (lat, lon) => {
      const response = await fetch(
        {
          lat: location.latitude,
          lon: location.longitude,
        }`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${
          import.meta.env.VITE_API_KEY
        }&units=metric`
      );
      const res = await response.json();

      setIconCode(res.weather[0].icon);
      // setLat(res.coord.lat);
      // setLon(res.coord.lon);
      setWeatherData(res);
    };
    getData(location);
  }, [location]);

  const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

  return (
    <div className="home">
      <h1>LOCAL WEATHER</h1>

      <div className="data">
        {iconUrl && <img src={iconUrl} alt="weather icon"></img>}
        {weatherData && (
          <>
            <h3>{Math.round(weatherData.main.temp)} °C</h3>
            <p>{weatherData.weather[0].description}</p>
            <p>feels like {Math.round(weatherData.main.feels_like)} °C </p>
            <p>humidity: {weatherData.main.humidity} % </p>
          </>
        )}
      </div>
      <Link to={`/city`}>
        <button>Change city</button>
      </Link>
    </div>
  );
};

export default Home;
