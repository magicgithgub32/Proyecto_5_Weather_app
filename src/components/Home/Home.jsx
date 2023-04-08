import "./Home.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_KEY = "24988b61f758c7f57d22813264c36866";

const Home = () => {
  const [lat, setLat] = useState(40.05);
  const [lon, setLon] = useState(0.06);
  const [iconCode, setIconCode] = useState("");
  const [weatherData, setWeatherData] = useState();

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      const res = await response.json();

      setIconCode(res.weather[0].icon);
      setLat(res.coord.lat);
      setLon(res.coord.lon);
      setWeatherData(res);
    };
    getData();
  }, [lon, lat]);

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
