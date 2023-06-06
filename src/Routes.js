import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import DetailsComponent from "./components/DetailsComponent";
export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeComponent />} />
      <Route path="/details/:id" element={<DetailsComponent />} />
    </Routes>
  );
};
