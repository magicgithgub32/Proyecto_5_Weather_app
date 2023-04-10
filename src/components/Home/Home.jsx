import "./Home.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [iconCode, setIconCode] = useState("");
  const [weatherData, setWeatherData] = useState();

  const [location, setLocation] = useState();
  const [located, setLocated] = useState();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latLon = {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        };

        console.log("Posición actual:", position);

        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        setLocated(true);
        setLocation(latLon);

        console.log("Position:", location);
      },
      (err) => {
        if (err.code === err.PERMISSION_DENIED) {
          setLocated(false);
        }
      }
    );
  }, []);

  const getData = async (lat, lon) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${
        import.meta.env.VITE_API_KEY
      }&units=metric`
    );
    const res = await response.json();

    setIconCode(res.weather[0].icon);

    setWeatherData(res);
  };

  useEffect(() => {
    if (location) {
      getData(location.lat, location.lon);
    }
  }, [location]);

  const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

  return (
    <>
      {!located ? (
        <p>
          Please, enable geo-location in your browser if you want to use this
          app
        </p>
      ) : (
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
      )}
    </>
  );
};

export default Home;
