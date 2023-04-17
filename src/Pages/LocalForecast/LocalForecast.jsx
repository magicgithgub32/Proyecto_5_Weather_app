import "./LocalForecast.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ForecastCard from "../../components/ForecastCard/ForecastCard";

const VITE_API_KEY = "24988b61f758c7f57d22813264c36866";

const LocalForecast = () => {
  const [forecastData, setForecastData] = useState([]);
  const [location, setLocation] = useState();
  const [located, setLocated] = useState();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latLon = {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        };

        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
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
  //     `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${
  //       import.meta.env.VITE_API_KEY
  //     }&units=metric`
  //   );
  //   const res = await response.json();

  //   const filteredData = res.list.filter((forecast) => {
  //     const date = new Date();
  //     if (
  //       parseInt(forecast.dt_txt[8] + forecast.dt_txt[9]) > date.getDate() &&
  //       forecast.dt_txt[11] + forecast.dt_txt[12] === "00"
  //     ) {
  //       return forecast;
  //     }
  //   });
  //   setForecastData(filteredData);
  // };

  const getData = async (lat, lon) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${VITE_API_KEY}&units=metric`
    );
    const res = await response.json();

    const filteredData = res.list.filter((forecast) => {
      const date = new Date();
      if (
        parseInt(forecast.dt_txt[8] + forecast.dt_txt[9]) > date.getDate() &&
        forecast.dt_txt[11] + forecast.dt_txt[12] === "00"
      ) {
        return forecast;
      }
    });
    setForecastData(filteredData);
  };

  useEffect(() => {
    if (location) {
      getData(location.lat, location.lon);
    }
  }, [location]);

  return (
    <article>
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
        <section className="localForecast">
          <h1>LOCAL WEATHER FORECAST</h1>

          <section className="dataForecast">
            {forecastData ? (
              forecastData.map((forecast, index) => (
                <ForecastCard key={index} forecast={forecast} />
              ))
            ) : (
              <p>Loading forecast data...</p>
            )}
          </section>
          <section className="buttons">
            <Link to={`/searchCityForecast`}>
              <button>Change city</button>
            </Link>
            <Link to={`/`}>
              <button>Back Home</button>
            </Link>
          </section>
        </section>
      )}
    </article>
  );
};

export default LocalForecast;
