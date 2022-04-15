import CategoriaMovies from "./CategoriaMovies";
import { urlApi, apiKey, lenguageEs} from "../Variables Auxiliares/auxiliares";

import { useEffect, useState } from "react";

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
            const info = data.results
            setListaPeliculasPopulares(info.splice(0,5));
        })
        );
    }, []);

    useEffect(() => {
        fetch(
        `${urlApi}/movie/top_rated?${apiKey}&${lenguageEs}&page=1`
        ).then((res) =>
        res.json().then((data) => {
            const info = data.results
            setListaPeliculasMejoresCriticas(info.splice(0,5));
        })
        );
    }, []);

    useEffect(() => {
        fetch(
        `${urlApi}/movie/upcoming?${apiKey}&${lenguageEs}&page=1`
        ).then((res) =>
        res.json().then((data) => {
            const info = data.results
            setListaPeliculasAEstrenar(info.splice(0,5));
        })
        );
    }, []);

    useEffect(() => {
        fetch(
        `${urlApi}/movie/now_playing?${apiKey}&${lenguageEs}&page=1`
        ).then((res) =>
        res.json().then((data) => {
            const info = data.results
            setListaPeliculasEnCine(info.splice(0,5));
        })
        );
    }, []);

    return (
        <section>
            <CategoriaMovies 
                title="Películas populares"
                movies={listaPeliculasPopulares}
                linkRuta="popular"
            />
            <CategoriaMovies 
                title="Películas con mejores críticas"
                movies={listaPeliculasMejoresCriticas}
                linkRuta="top_rated"
            />
            <CategoriaMovies 
                title="Películas a estrenarse"
                movies={listaPeliculasAEstrenar}
                linkRuta="upcoming"
            />
            <CategoriaMovies 
                title="Películas en cines"
                movies={listaPeliculasEnCine}
                linkRuta="now_playing"
            />

        </section>
    )
} 

export default Movies;