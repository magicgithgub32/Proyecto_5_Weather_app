import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import SearchCity from "./components/SearchCity/SearchCity";
import { useState, useEffect } from "react";

import "./App.css";

const App = () => {
  // const [location, setLocation] = useState();
  // const [located, setLocated] = useState();

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       const latLon = {
  //         lat: position.coords.latitude,
  //         lon: position.coords.longitude,
  //       };
  //       setLocated(true);
  //       setLocation(latLon);
  //     },
  //     (err) => {
  //       if (err.code === err.PERMISSION_DENIED) {
  //         setLocated(false);
  //       }
  //     }
  //   );
  // }, []);

  return (
    <>
      {/* {!located ? (
        <p>
          Please, enable geo-location in your browser if you want to use this
          app
        </p>
      ) : ( */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/city" element={<SearchCity />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
      {/* )} */}
    </>
  );
};

export default App;
