import { useState, useEffect } from "react";
import { ContainerImg, ImgPilots } from "./Pilots.styled";

export default function Pilot(props) {
  const [detailPilot, setDetailPilot] = useState([]);
  const pilotsUrl = props.dataPilots;

  useEffect(() => {
    if (pilotsUrl.length > 0) {
      const pilots = pilotsUrl.map((item, index) => {
        const num = pilotsUrl[index].split("/")[5];
        const urlPilot = `https://starwars-visualguide.com/assets/img/characters/${num}.jpg`;
        return urlPilot;
      });
      setDetailPilot(pilots);
    }
  }, []);

  return (
    <ContainerImg>
      {detailPilot.map((item, index) => {
        return <ImgPilots key={index} src={item} alt="" />;
      })}
    </ContainerImg>
  );
}
