import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../home";
import Services from "../services";

import "./style.scss";
const Content = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
};

export default Content;
