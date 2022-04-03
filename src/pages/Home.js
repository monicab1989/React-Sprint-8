import React from "react";
import HomeData from "../components/homeData/HomeData";
import NavScreen from "../nav/NavScreen";

export default function home() {
  return (
    <div>
      <NavScreen />
      <HomeData />
    </div>
  );
}
