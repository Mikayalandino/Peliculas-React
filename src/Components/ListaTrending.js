import "../Styles/HomeTendencias.scss";

import CardsTendencias from "./CardsTendencias";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Paginacion from "./Paginacion";

const ListaTrending = () => {
  const params = useParams();
  const [data, setData] = useState();
  const [paginado, setPaginado] = useState(1);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/${params.type}/week?api_key=e25295b648c3ef3c3b8c8c319786e4fb&language=es-ES&page=${paginado}`
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
                img={`https://image.tmdb.org/t/p/w300/${lista.poster_path}`}
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
