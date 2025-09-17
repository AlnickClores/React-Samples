import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./App";
import TravelMugKDS from "./components/travelmug/TravelMugKDS";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BootstrapPage from "./components/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Crudd from "./components/crudd";
import SearchFilter from "./pages/SearchFilter";
import UseContextSample from "./pages/ThemePage";
import FormPage from "./pages/FormPage";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="travelmug" element={<TravelMugKDS />}></Route>
      <Route path="bootstrapPage" element={<BootstrapPage />}></Route>
      <Route path="crud" element={<Crudd />}></Route>
      <Route path="search" element={<SearchFilter />}></Route>
      <Route path="usecontext" element={<UseContextSample />}></Route>
      <Route path="form" element={<FormPage />}></Route>
    </Routes>
  </BrowserRouter>
);
