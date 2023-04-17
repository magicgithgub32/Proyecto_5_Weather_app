import React from "react";
import "./WeatherData.css";

const WeatherData = ({ weatherData }) => {
  return (
    <figure>
      {weatherData.weather[0].description.includes("rain") && (
        <img src="https://res.cloudinary.com/dxxkog06n/image/upload/v1681715404/10d_2x_vgcua1.png" />
      )}
      {weatherData.weather[0].description.includes("snow") && (
        <img src="https://res.cloudinary.com/dxxkog06n/image/upload/v1681715420/13d_2x_syhngk.png" />
      )}

      {weatherData.weather[0].description.includes("clear") && (
        <img src="https://res.cloudinary.com/dxxkog06n/image/upload/v1681715420/01d_2x_wxlm3r.png" />
      )}

      {weatherData.weather[0].description === "scattered clouds" && (
        <img src="https://res.cloudinary.com/dxxkog06n/image/upload/v1681715403/03d_2x_ypj7yd.png" />
      )}

      {weatherData.weather[0].description === "overcast clouds" && (
        <img src="https://res.cloudinary.com/dxxkog06n/image/upload/v1681715403/04d_2x_wxcxue.png" />
      )}

      {weatherData.weather[0].description === "broken clouds" && (
        <img src="https://res.cloudinary.com/dxxkog06n/image/upload/v1681715403/04d_2x_wxcxue.png" />
      )}

      {weatherData.weather[0].description === "thunderstorm" && (
        <img src="https://res.cloudinary.com/dxxkog06n/image/upload/v1681715420/11d_2x_j12xgy.png" />
      )}
      {weatherData.weather[0].description === "mist" && (
        <img src="https://res.cloudinary.com/dxxkog06n/image/upload/v1681715403/50d_2x_qz3ad8.png" />
      )}
      {weatherData.weather[0].description === "few clouds" && (
        <img src="https://res.cloudinary.com/dxxkog06n/image/upload/v1681715404/02d_2x_ziopt4.png" />
      )}

      <h2 className="temp">{Math.round(weatherData.main.temp)} °C</h2>
      <p>{weatherData.weather[0].description}</p>
      <p>feels like {Math.round(weatherData.main.feels_like)} °C </p>
      <p>humidity: {weatherData.main.humidity} % </p>
      <p>wind speed: {Math.round(weatherData.wind.speed * 1.61)} km/h</p>
    </figure>
  );
};

export default WeatherData;
