import "./LocalForecast.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const localForecast = () => {
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

  const getData = async (lat, lon) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${
        import.meta.env.VITE_API_KEY
      }`
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
        <div className="localForeCast">
          <h1>LOCAL FORECAST</h1>

          <div className="data">
            {iconUrl && <img src={iconUrl} alt="weather icon"></img>}
            {weatherData && <></>}
          </div>
          {/* <Link to={}>
            <button>Change city</button>
          </Link> */}
        </div>
      )}
    </>
  );
};
