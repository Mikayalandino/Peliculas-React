import "../Styles/HomeTendencias.scss";
import "../Styles/Paginado.scss";

import { urlApi, apiKey, lenguageEs } from "../Variables Auxiliares/auxiliares";
import BrokenImg from "../Images/BrokenImg.png";
import Paginacion from "./Paginacion";

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Search = () => {
  const params = useParams();
  const [searchResultados, setSearchResultados] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [dataPaginado, setDataPaginado] = useState({});

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `${urlApi}/search/multi?${apiKey}&query=${params.title}&${lenguageEs}/1`
    ).then((res) =>
      res.json().then((data) => {
        setSearchResultados(data.results);
        setIsLoading(false);
        setDataPaginado(data);
      })
    );
  }, [params.title]);

  const handleMouseEnter = (e) => {
    e.target.style.transform = "scale(1.1)";
    e.target.style.transition = "0.5s";
  };

  const handleMouseLeave = (e) => {
    e.target.style.transform = "scale(1)";
  };

  return (
    <div className="container-home">
      {isLoading && (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      )}
      <div className="container-home-card">
        <div className="peliculas-tendencia">
          <h1 className="title">Resultados para:</h1>
        </div>
      </div>
      <div className="cards-tendencias">
        {searchResultados.map((resultado) => (
          <div>
          <Link
            to={`/${!!resultado.title ? "movie" : "tv"}/${resultado.id}/info`}
            key={resultado.id}>
            {resultado.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w300/${resultado.poster_path}`}
                alt={resultado.poster_path}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            ) : (
              <img className="broken-img" src={BrokenImg} alt="Imagen rota" />
            )}
             </Link>
            <div className="peliculas-tendencia">
              <h3 className="search-title">{resultado.title}</h3>
            </div>
            </div>
         
        ))}
      </div>
    </div>
  );
};

export default Search;
