import "../Styles/Search.scss";

import { urlApi, apiKey, lenguageEs } from "../Variables Auxiliares/auxiliares";
import { Link } from 'react-router-dom';

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Search = (searchResultado) => {
  const params = useParams();
  const [searchResultados, setSearchResultados] = useState([]);

  useEffect(() => {
    fetch(
      `${urlApi}/search/multi?${apiKey}&query=${params.title}&${lenguageEs}`
    ).then((res) =>
      res.json().then((data) => {
        setSearchResultados(data.results);
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
    <section>
      <div>
        <h1 className="title">Resultados para:</h1>
        <Link className="search-cards" to={`/search/${searchResultado}`}>
          {searchResultados.map((resultado) => (
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w300/${resultado.poster_path}`}
                alt={resultado.poster_path}
                key={resultado.id}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                />
              <h3 key={resultado.id}>{resultado.title}</h3>
            </div>
          ))}
        </Link>
       
      </div>
      <Stack spacing={2}>
        <Pagination 
          className="paginado"
          count={10} 
          showFirstButton 
          showLastButton 
        />
      </Stack>
    </section>
  );
};

export default Search;
