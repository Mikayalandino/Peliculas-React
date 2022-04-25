import "../Styles/HomeTendencias.scss";

import {
  urlApi,
  apiKey,
  lenguageEs,
  urlImgOriginal,
  urlImg300,
} from "../Variables Auxiliares/auxiliares";
import BrokenImg from "../Images/BrokenImg.png";

import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Reparto = () => {
  const params = useParams();
  const [data, setData] = useState();
  const [paginado, setPaginado] = useState(1);

  useEffect(() => {
    fetch(
      `${urlApi}/${params.tipo}/${params.id}/credits?${apiKey}&${lenguageEs}&page=${paginado}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.cast);
      });
  }, [paginado]);

  return (
    <div className="cards-tendencias">
      {!!data &&
        data.map((cast) => (
          <div className="card-reparto" key={cast.id}>
            {cast.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w300/${cast.profile_path}`}
                alt={`Poster de ${cast.name}`}
              />
            ) : (
              <img className="broken-img" src={BrokenImg} alt="Imagen rota" />
            )}
            <h2>{cast.name}</h2>
            <h3 className="character">{cast.character}</h3>
          </div>
        ))}
    </div>
  );
};

export default Reparto;
