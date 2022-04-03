import React from "react";
import { Main, ButtonShips } from "./HomeData.styled";
import { useNavigate } from "react-router-dom";

export default function () {
  const navigate = useNavigate();
  const goStarShips = () => {
    navigate("/starShips");
  };
  return (
    <div>
      <Main>
        <h1>Hace mucho tiempo en una galaxia muy, muy lejana...</h1>
        <br />
        <h2>Que la fuerza te acompañe.</h2>
        <br />
        <h3>No. No lo intentes. Hazlo, o no lo hagas, pero no lo intentes.</h3>
        <br />
        <h4>¿Quién es más loco: el loco o el loco que sigue al loco?</h4>
        <br />
        <h5>Sin duda, maravillosa la mente de un niño es.</h5>
        <br />
        <h6>
          La esperanza es como el sol. Si solo lo crees cuando lo ves, nunca
          pasarás la noche.
        </h6>
        <br />
        <ButtonShips onClick={goStarShips}>Star Ships</ButtonShips>
      </Main>
    </div>
  );
}
