import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import StarShips from "../pages/StarShips";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Starship from "../pages/Starship";

export default () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/starShips" element={<StarShips />} />
      <Route path="/starship/:id" element={<Starship />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login/:id" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  </BrowserRouter>
);
