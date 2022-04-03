import { useState, useEffect } from "react";
import { ImgFilms, ContainerImg } from "./Films.styled";

export default function Films(props) {
  const [detailFilm, setDetailFilm] = useState([]);
  const filmsUrl = props.dataFilms;

  useEffect(() => {
    if (filmsUrl.length > 0) {
      const films = filmsUrl.map((item, index) => {
        const num = filmsUrl[index].split("/")[5];
        const urlFilm = `https://starwars-visualguide.com/assets/img/films/${num}.jpg`;
        return urlFilm;
      });
      setDetailFilm(films);
    }
  }, []);
  return (
    <ContainerImg>
      {detailFilm.map((item, index) => {
        return <ImgFilms key={index} src={item} alt="" />;
      })}
    </ContainerImg>
  );
}
