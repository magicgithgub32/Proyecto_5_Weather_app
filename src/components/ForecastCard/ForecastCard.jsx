import React from "react";
import "./ForecastCard.css";

function ForecastCard({ forecast }) {
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
      <p>{forecast.weather[0].description}</p>
    </div>
  );
}

export default ForecastCard;
