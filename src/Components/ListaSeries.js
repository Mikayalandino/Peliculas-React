import "../Styles/HomeTendencias.scss";

import useFetch from "../Hooks/useFetch";
import CategoriaCardsSeries from "./CategoriaCardsSeries";

import { useParams } from "react-router-dom";
import { useState } from "react";

const ListaSeries = () => {
  const params = useParams();
  const [paginado, setPaginado] = useState(1);
  const data = useFetch(false, "tv", params.category, paginado);

  return (
    <div className="container-home">
      <div className="container-home-card">
        <div className="peliculas-tendencia">
          {params.category === "popular" && (
            <h2 className="title">Series populares</h2>
          )}
        </div>
        <div className="peliculas-tendencia">
          {params.category === "top_rated" && (
            <h2 className="title">Series con mejores críticas</h2>
          )}
        </div>
        <div className="peliculas-tendencia">
          {params.category === "on_the_air" && (
            <h2 className="title">Series al aire</h2>
          )}
        </div>
      </div>
      <div className="cards-tendencias">
        {!!data &&
          data.map((serie) => (
            <CategoriaCardsSeries
              titulo={serie.name}
              img={`https://image.tmdb.org/t/p/w300/${serie.poster_path}`}
              id={serie.id}
              category="tv"
              key={serie.id}
            />
          ))}
      </div>
    </div>
  );
};

export default ListaSeries;
