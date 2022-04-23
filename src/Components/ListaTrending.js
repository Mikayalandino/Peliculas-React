import "../Styles/HomeTendencias.scss";

import CardsTendencias from "./CardsTendencias";
import {
  urlApi,
  apiKey,
  lenguageEs,
  urlImgOriginal,
  urlImg300,
} from "../Variables Auxiliares/auxiliares";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Paginacion from "./Paginacion";

const ListaTrending = () => {
  const params = useParams();
  const [data, setData] = useState();
  const [paginado, setPaginado] = useState(1);

  useEffect(() => {
    fetch(
      `${urlApi}/trending/${params.type}/week?${apiKey}&${lenguageEs}&page=${paginado}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
      });
  }, [paginado]);

  return (
    <div className="container-home">
      <div className="container-home-card">
        <div className="peliculas-tendencia">
          {params.type === "movie" && (
            <h2 className="title">Películas que son tendencia</h2>
          )}
        </div>
        <div className="peliculas-tendencia">
          {params.type === "tv" && (
            <h2 className="title">Series que son tendencia</h2>
          )}
        </div>
        <div className="cards-tendencias">
          {!!data &&
            data.map((lista) => (
              <CardsTendencias
                tituloPeliculas={lista.title}
                tituloSeries={lista.name}
                img={`${urlImg300}/${lista.poster_path}`}
                link={`/${lista.id}`}
                key={lista.id}
                types={params.type}
                id={lista.id}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ListaTrending;
