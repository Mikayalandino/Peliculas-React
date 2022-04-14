import "../Styles/Movies.scss"

import CategoriaMovies from "./CategoriaMovies";
import { useEffect, useState } from "react";
import { urlApi, apiKey, lenguageEs} from "../Variables Auxiliares/auxiliares";

const Movies = () => {

    const [listaPeliculasPopulares, setListaPeliculasPopulares] = useState([])
    const [listaPeliculasMejoresCriticas, setListaPeliculasMejoresCriticas] = useState([])
    const [listaPeliculasAEstrenar, setListaPeliculasAEstrenar] = useState([])
    const [listaPeliculasEnCine, setListaPeliculasEnCine] = useState([])
    
    useEffect(() => {
        fetch(
        `${urlApi}/movie/popular?${apiKey}&${lenguageEs}&page=1`
        ).then((res) =>
        res.json().then((data) => {
            setListaPeliculasPopulares(data.results);
        })
        );
    }, []);

    useEffect(() => {
        fetch(
        `${urlApi}/movie/top_rated?${apiKey}&${lenguageEs}&page=1`
        ).then((res) =>
        res.json().then((data) => {
            setListaPeliculasMejoresCriticas(data.results);
        })
        );
    }, []);

    useEffect(() => {
        fetch(
        `${urlApi}/movie/upcoming?${apiKey}&${lenguageEs}&page=1`
        ).then((res) =>
        res.json().then((data) => {
            setListaPeliculasAEstrenar(data.results);
        })
        );
    }, []);

    useEffect(() => {
        fetch(
        `${urlApi}/movie/now_playing?${apiKey}&${lenguageEs}&page=1`
        ).then((res) =>
        res.json().then((data) => {
            setListaPeliculasEnCine(data.results);
        })
        );
    }, []);

    return (
        <div className="movies">
            <CategoriaMovies 
                title="Películas populares"
                movies={listaPeliculasPopulares}
            />
            <CategoriaMovies 
                title="Películas con mejores críticas"
                movies={listaPeliculasMejoresCriticas}
            />
            <CategoriaMovies 
                title="Películas a estrenarse"
                movies={listaPeliculasAEstrenar}
            />
            <CategoriaMovies 
                title="Películas en cines"
                movies={listaPeliculasEnCine}
            />

        </div>
    )
} 

export default Movies;