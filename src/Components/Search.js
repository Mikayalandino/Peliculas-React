import "../Styles/Search.scss";
import "../Styles/Paginado.scss"

import { urlApi, apiKey, lenguageEs } from "../Variables Auxiliares/auxiliares";

import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box'
import Pagination from '@mui/material/Pagination';

const Search = (searchResultado) => {
  const params = useParams();
  const [searchResultados, setSearchResultados] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [dataPaginado, setDataPaginado] = useState({})

  useEffect(() => {
    setIsLoading(true)
    fetch(
      `${urlApi}/search/multi?${apiKey}&query=${params.title}&${lenguageEs}/${page}`
    ).then((res) =>
      res.json().then((data) => {
        setSearchResultados(data.results);
        setIsLoading(false)
        setDataPaginado(data)
      })
    );
  }, [params.title]);

  console.log(dataPaginado)

  const handleMouseEnter = (e) => {
    e.target.style.transform = "scale(1.1)";
    e.target.style.transition = "0.5s";
  };

  const handleMouseLeave = (e) => {
    e.target.style.transform = "scale(1)";
  };

  const [page, setPage] = useState(1);

  const handleChange = (e, value) => {
    setPage(e.target.value);
  };
  
  return (
    <section>
      {isLoading && <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>}
      <div>
        <h1 className="title">Resultados para:</h1>
        <Link className="search-cards" to={`/search/${searchResultado}`}>
          {searchResultados.map((resultado) => (
            <div key={resultado.id}>
              <img
                src={`https://image.tmdb.org/t/p/w300/${resultado.poster_path}`}
                alt={resultado.poster_path}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                />
              <h3>{resultado.title}</h3>
            </div>
          ))}
        </Link>
      </div>
      <div spacing={2}>
        <Pagination 
          className="paginado"
          page={page} 
          count={5} 
          showFirstButton 
          showLastButton 
          onChange={handleChange} 
          color="info"
          defaultPage={page}
        />
      </div>
    </section>
  );
};

export default Search;
