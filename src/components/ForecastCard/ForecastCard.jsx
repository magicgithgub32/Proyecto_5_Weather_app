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
        <img src="https://res.cloudinary.com/dxxkog06n/image/upload/v1681715404/10d_2x_vgcua1.png" />
      )}

      {forecast.weather[0].description.includes("snow") && (
        <img src="https://res.cloudinary.com/dxxkog06n/image/upload/v1681715420/13d_2x_syhngk.png" />
      )}

      {forecast.weather[0].description.includes("clear") && (
        <img src="https://res.cloudinary.com/dxxkog06n/image/upload/v1681715420/01d_2x_wxlm3r.png" />
      )}

      {forecast.weather[0].description === "scattered clouds" && (
        <img src="https://res.cloudinary.com/dxxkog06n/image/upload/v1681715403/03d_2x_ypj7yd.png" />
      )}

      {forecast.weather[0].description === "overcast clouds" && (
        <img src="https://res.cloudinary.com/dxxkog06n/image/upload/v1681715403/04d_2x_wxcxue.png" />
      )}

      {forecast.weather[0].description === "broken clouds" && (
        <img src="https://res.cloudinary.com/dxxkog06n/image/upload/v1681715403/04d_2x_wxcxue.png" />
      )}

      {forecast.weather[0].description === "thunderstorm" && (
        <img src="https://res.cloudinary.com/dxxkog06n/image/upload/v1681715420/11d_2x_j12xgy.png" />
      )}
      {forecast.weather[0].description === "mist" && (
        <img src="https://res.cloudinary.com/dxxkog06n/image/upload/v1681715403/50d_2x_qz3ad8.png" />
      )}
      {forecast.weather[0].description === "few clouds" && (
        <img src="https://res.cloudinary.com/dxxkog06n/image/upload/v1681715404/02d_2x_ziopt4.png" />
      )}

      <p>{forecast.weather[0].description}</p>
    </div>
  );
};

export default ForecastCard;
