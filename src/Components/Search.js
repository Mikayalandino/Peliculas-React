import "../Styles/Search.scss";

import { urlApi, apiKey, lenguageEs } from "../Variables Auxiliares/auxiliares";
import { Link } from 'react-router-dom';

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

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
  }, []);

  return (
    <section className="search">
      <div>
        <h1 className="title">Resultados para:</h1>
        <Link className="search-cards" to={`/search/${searchResultado}`}>
          {searchResultados.map((resultado) => (
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w300/${resultado.poster_path}`}
                alt={resultado.poster_path}
                key={resultado.id}
              />
              <h3 key={resultado.id}>{resultado.title}</h3>
            </div>
          ))}
        </Link>
      </div>
    </section>
  );
};

export default Search;
