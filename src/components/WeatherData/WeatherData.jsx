import React from "react";
import "./WeatherData.css";

const WeatherData = ({ weatherData }) => {
  return (
    <figure>
      <h2 className="temp">{Math.round(weatherData.main.temp)} °C</h2>
      <p>{weatherData.weather[0].description}</p>
      <p>feels like {Math.round(weatherData.main.feels_like)} °C </p>
      <p>humidity: {weatherData.main.humidity} % </p>
      <p>wind speed: {Math.round(weatherData.wind.speed * 1.61)} km/h</p>
    </figure>
  );
};

export default WeatherData;
