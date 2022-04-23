import CategoriaMovies from "./CategoriaMovies";
import { urlApi, apiKey, lenguageEs } from "../Variables Auxiliares/auxiliares";

import { useEffect, useState } from "react";

const Movies = () => {
  const [listaPeliculasPopulares, setListaPeliculasPopulares] = useState([]);
  const [listaPeliculasMejoresCriticas, setListaPeliculasMejoresCriticas] =
    useState([]);
  const [listaPeliculasAEstrenar, setListaPeliculasAEstrenar] = useState([]);
  const [listaPeliculasEnCine, setListaPeliculasEnCine] = useState([]);

  useEffect(() => {
    fetch(`${urlApi}/movie/popular?${apiKey}&${lenguageEs}&page=1`).then(
      (res) =>
        res.json().then((data) => {
          setListaPeliculasPopulares(data.results);
        })
    );
  }, []);

  useEffect(() => {
    fetch(`${urlApi}/movie/top_rated?${apiKey}&${lenguageEs}&page=1`).then(
      (res) =>
        res.json().then((data) => {
          setListaPeliculasMejoresCriticas(data.results);
        })
    );
  }, []);

  useEffect(() => {
    fetch(`${urlApi}/movie/upcoming?${apiKey}&${lenguageEs}&page=1`).then(
      (res) =>
        res.json().then((data) => {
          setListaPeliculasAEstrenar(data.results);
        })
    );
  }, []);

  useEffect(() => {
    fetch(`${urlApi}/movie/now_playing?${apiKey}&${lenguageEs}&page=1`).then(
      (res) =>
        res.json().then((data) => {
          setListaPeliculasEnCine(data.results);
        })
    );
  }, []);

  return (
    <section>
      <CategoriaMovies
        title="Películas populares"
        movies={listaPeliculasPopulares.slice(0, 5)}
        linkRuta="popular"
      />
      <CategoriaMovies
        title="Películas con mejores críticas"
        movies={listaPeliculasMejoresCriticas.slice(0, 5)}
        linkRuta="top_rated"
      />
      <CategoriaMovies
        title="Películas a estrenarse"
        movies={listaPeliculasAEstrenar.slice(0, 5)}
        linkRuta="upcoming"
      />
      <CategoriaMovies
        title="Películas en cines"
        movies={listaPeliculasEnCine.slice(0, 5)}
        linkRuta="now_playing"
      />
    </section>
  );
};

export default Movies;
