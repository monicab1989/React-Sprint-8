import React from "react";
import { NavLink } from "react-router-dom";

export default function () {
  return (
    <header>
      <nav className="navHome">
        <NavLink to="/" className="navMain">
          HOME
        </NavLink>
      </nav>
    </header>
  );
}
