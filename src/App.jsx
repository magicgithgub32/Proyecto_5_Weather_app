import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import SearchCity from "./Pages/SearchCity/SearchCity";
import LocalForecast from "./Pages/LocalForecast/LocalForecast";
import SearchCityForecast from "./Pages/SearchCityForecast/SearchCityForecast";

import "./App.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/city" element={<SearchCity />}></Route>
        <Route path="/localForecast" element={<LocalForecast />}></Route>
        <Route
          path="/searchCityForecast/"
          element={<SearchCityForecast />}
        ></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </>
  );
};

export default App;
