import React from "react";
import "./ForecastCard.css";

const ForecastCard = ({ forecast }) => {
  return (
    <div className="forecast-item">
      <p>
        {new Date(forecast.dt_txt)
          .toLocaleDateString("en-GB", {
            day: "numeric",
            month: "numeric",
          })
          .split("/")
          .join("/")}
      </p>
      <h3>{Math.round(forecast.main.temp)}°C</h3>

      {forecast.weather[0].description.includes("rain") && (
        <img src="http://openweathermap.org/img/wn/10d@2x.png" />
      )}

      {forecast.weather[0].description.includes("snow") && (
        <img src="http://openweathermap.org/img/wn/13d@2x.png" />
      )}

      {forecast.weather[0].description.includes("clear") && (
        <img src="http://openweathermap.org/img/wn/01d@2x.png" />
      )}

      {forecast.weather[0].description === "scattered clouds" && (
        <img src="http://openweathermap.org/img/wn/03d@2x.png" />
      )}

      {forecast.weather[0].description === "overcast clouds" && (
        <img src="http://openweathermap.org/img/wn/04d@2x.png" />
      )}

      {forecast.weather[0].description === "broken clouds" && (
        <img src="http://openweathermap.org/img/wn/04d@2x.png" />
      )}

      {forecast.weather[0].description === "thunderstorm" && (
        <img src="http://openweathermap.org/img/wn/11d@2x.png" />
      )}
      {forecast.weather[0].description === "mist" && (
        <img src="http://openweathermap.org/img/wn/50d@2x.png" />
      )}

      <p>{forecast.weather[0].description}</p>
    </div>
  );
};

export default ForecastCard;
