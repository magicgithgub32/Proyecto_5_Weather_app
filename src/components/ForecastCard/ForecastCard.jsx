import React from "react";

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
      <p>{Math.round(forecast.main.temp)}°C</p>
      <p>{forecast.weather[0].description}</p>
    </div>
  );
}

export default ForecastCard;
