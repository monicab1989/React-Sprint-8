import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  ButtonMoreView,
  CardContainer,
  ContainerButton,
} from "./ListStarShip.styled";
import { isLogIn } from "../../utils/validationForm";
import { useNavigate } from "react-router-dom";
import Load from "../../utils/Load";

export default function ListStarShip(props) {
  const [dataShip, setDataShip] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  //Estado que llama a la API y recoge los datos
  useEffect(() => {
    const valorIsLogIn = window.localStorage.getItem(isLogIn);
    if (valorIsLogIn !== "true") {
      navigate("/login");
    } else {
      axios
        .get(`https://swapi.dev/api/starships/?page=${currentPage}`)
        .then((res) => {
          const result = res.data.results;
          setDataShip((prevDataShip) => prevDataShip.concat(result));
          setLoading(false);
        });
    }
  }, [currentPage]);

  //Función que te manda a la pag starship para los detalles de la nave
  const detailShip = (value) => {
    const detail = dataShip.filter((x) => x.name === value.name);
    const params = { ...detail[0] };
    navigate(`/starship/${params.name}`, { state: { name: params } });
  };

  //Función que muestra por pantalla más naves al hacer click en el botón
  const moreShips = () => {
    if (currentPage < 4) {
      setCurrentPage(currentPage + 1);
    } else {
      console.log("No hay mas...");
    }
  };

  return (
    <div className="containerLoading">
      {loading ? (
        <Load />
      ) : (
        <div className="containerList">
          {dataShip.map((item, index) => {
            return (
              <CardContainer key={index} onClick={(x) => detailShip(item)}>
                <p name={item.name} value={item.name}>
                  {item.name.toUpperCase()}
                </p>
                <p>{item.model}</p>
                <br />
              </CardContainer>
            );
          })}
          <ContainerButton>
            <ButtonMoreView onClick={moreShips}>More View</ButtonMoreView>
          </ContainerButton>
        </div>
      )}
    </div>
  );
}
