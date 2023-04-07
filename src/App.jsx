import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import SearchCity from "./components/SearchCity/SearchCity";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/city" element={<SearchCity />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
