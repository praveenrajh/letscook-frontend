import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Catagories from "./pages/Catagories";
import Recipedetails from "./pages/Recipedetails";
import Log from "./assets/login.jpg";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/catagories" element={<Catagories />} />
    </Routes>
  );
}

export default App;
