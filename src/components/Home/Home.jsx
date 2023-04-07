import "./Home.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_KEY = "24988b61f758c7f57d22813264c36866";

const Home = () => {
  const [lat, setLat] = useState(40.05);
  const [lon, setLon] = useState(0.06);
  const [iconCode, setIconCode] = useState();

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      const res = await response.json();

      setIconCode(res.weather[0].icon);
      setLat(res.coord.lat);
      setLon(res.coord.lon);
    };
    getData();
  }, [lon, lat]);

  const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

  return (
    <Link to={`/city`}>
      <div>{iconUrl && <img src={iconUrl} alt="weather icon"></img>}</div>
    </Link>
  );
};

export default Home;
