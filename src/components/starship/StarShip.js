import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Pilot from "./pilots/Pilot";
import {
  ContainerDetails,
  CardContainer,
  ImgShip,
  ContainerImg,
  ContainerName,
  ContainerNamePilot,
  ContainerButton,
  ButtonBack,
} from "./StarShip.style";
import Films from "./films/Films";
import Load from "../../utils/Load";

export default function StarShip() {
  const [ship, setShip] = useState({});
  const [image, setImage] = useState("");

  const location = useLocation();
  const details = location.state.name;
  const navigate = useNavigate();

  useEffect(() => {
    setShip(details);
    loadImage(details.url);
  }, []);

  const loadImage = (urlImage) => {
    if (urlImage !== undefined) {
      const id = urlImage.split("/")[5];
      const imageUrl = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;
      checkIfImageExists(imageUrl, (result) => {
        if (result) setImage(imageUrl);
        else
          setImage(
            `https://starwars-visualguide.com/assets/img/big-placeholder.jpg`
          );
      });
    }
  };

  function checkIfImageExists(url, callback) {
    const img = new Image();
    img.src = url;
    if (img.complete) {
      callback(true);
    } else {
      img.onload = () => {
        callback(true);
      };
      img.onerror = () => {
        callback(false);
      };
    }
  }

  const goBack = () => {
    navigate("/starShips");
  };

  return (
    <CardContainer>
      <ContainerImg>
        {image === "" ? <Load /> : <ImgShip src={image} alt="" />}
      </ContainerImg>
      <ContainerButton>
        <ButtonBack onClick={goBack}>Back</ButtonBack>
      </ContainerButton>
      <ContainerName>
        <h1>{ship.name}</h1>
      </ContainerName>
      <ContainerDetails>
        <div>
          <p>Model: {ship.model}</p>
          <p>Cost in credits: {ship.cost_in_credits}</p>
          <p>Atmosphering: {ship.max_atmosphering_speed}</p>
        </div>
        <div>
          <p>{ship.manufacturer}</p>
          <p>Length: {ship.length}</p>
          <p>Crew: {ship.crew}</p>
        </div>
      </ContainerDetails>
      {ship.pilots !== undefined && (
        <div>
          {ship.pilots.length > 0 && (
            <ContainerNamePilot>
              <h2>Pilots</h2>
            </ContainerNamePilot>
          )}
          <Pilot dataPilots={ship.pilots} />
        </div>
      )}
      {ship.films !== undefined && (
        <div>
          <ContainerNamePilot>
            <h2>Films</h2>
          </ContainerNamePilot>
          <Films dataFilms={ship.films} />
        </div>
      )}
    </CardContainer>
  );
}
