import "../Styles/Home.scss"

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

   /*  const recortarLista = (array) => {
        return array.splice(0.5)
    }
    
 */


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