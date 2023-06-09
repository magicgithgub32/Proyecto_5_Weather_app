import "./Home.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import WeatherData from "../../components/WeatherData/WeatherData";

const VITE_API_KEY = "24988b61f758c7f57d22813264c36866";

const Home = () => {
  const [weatherData, setWeatherData] = useState();
  const [location, setLocation] = useState();
  const [located, setLocated] = useState();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const latLon = { lat, lon };
        setLocated(true);
        setLocation(latLon);
      },
      (err) => {
        if (err.code === err.PERMISSION_DENIED) {
          setLocated(false);
        }
      }
    );
  }, []);

  // const getData = async (lat, lon) => {
  //   const response = await fetch(
  //     `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${
  //       import.meta.env.VITE_API_KEY
  //     }&units=metric`
  //   );
  //   const res = await response.json();

  //   setIconCode(res.weather[0].icon);

  //   setWeatherData(res);
  // };

  const getData = async (lat, lon) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${VITE_API_KEY}&units=metric`
    );
    const res = await response.json();

    setWeatherData(res);
  };

  useEffect(() => {
    if (location) {
      getData(location.lat, location.lon);
    }
  }, [location]);

  return (
    <>
      {!located ? (
        <div className="geo">
          <p>
            Enable geo-location in your browser if you want to use this service
          </p>
          <img
            src="https://res.cloudinary.com/dxxkog06n/image/upload/v1681137555/Screenshot_2023-04-10_at_16.38.28_xoloyh.png"
            alt="Geolocation"
          />
        </div>
      ) : (
        <article className="home">
          <h1>LOCAL WEATHER</h1>

          <section className="data">
            {weatherData && <WeatherData weatherData={weatherData} />}
          </section>
          <section className="buttons">
            <Link to={`/city`}>
              <button>Change city</button>
            </Link>

            <Link to={`/localForecast`}>
              <button>Forecast</button>
            </Link>
          </section>
        </article>
      )}
    </>
  );
};

export default Home;
