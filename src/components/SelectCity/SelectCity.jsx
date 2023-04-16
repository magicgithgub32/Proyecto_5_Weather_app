import React from "react";

const SelectCity = ({ selectedCity, handleInput, CityData }) => {
  return (
    <select value={selectedCity} onChange={handleInput}>
      <option value="">Select a city</option>

      {CityData.map((city, index) => (
        <option key={index} value={city.city}>
          {city.city}
        </option>
      ))}
    </select>
  );
};

export default SelectCity;
