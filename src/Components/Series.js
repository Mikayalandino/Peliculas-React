import CategoriaSeries from "./CategoriaSeries";
import { urlApi, apiKey, lenguageEs} from "../Variables Auxiliares/auxiliares";

import { useEffect, useState } from "react";

const Series = () => {

    const [listaSeriesPopulares, setListaSeriesPopulares] = useState([])
    const [listaSeriesMejoresCriticas, setListaSeriesMejoresCriticas] = useState([])
    const [listaSeriesAlAire, setListaSeriesAlAire] = useState([])

    useEffect(() => {
        fetch(
        `${urlApi}/tv/popular?${apiKey}&${lenguageEs}&page=1`
        ).then((res) =>
        res.json().then((data) => {
            setListaSeriesPopulares(data.results);
        })
        );
    }, []);

    useEffect(() => {
        fetch(
        `${urlApi}/tv/top_rated?${apiKey}&${lenguageEs}&page=1`
        ).then((res) =>
        res.json().then((data) => {
            setListaSeriesMejoresCriticas(data.results);
        })
        );
    }, []);

    useEffect(() => {
        fetch(
        `${urlApi}/tv/on_the_air?${apiKey}&${lenguageEs}&page=1`
        ).then((res) =>
        res.json().then((data) => { 
            setListaSeriesAlAire(data.results);
        })
        );
    }, []);

    return (
        <section>
            <CategoriaSeries 
                title="Series populares"
                series={listaSeriesPopulares.slice(0,5)}
                linkRuta="popular"
            />
            <CategoriaSeries 
                title="Series con mejores críticas"
                series={listaSeriesMejoresCriticas.slice(0,5)}
                linkRuta="top_rated"
            />
            <CategoriaSeries 
                categoria="tv"
                title="Series al aire"
                series={listaSeriesAlAire.slice(0,5)}
                linkRuta="on_the_air"
            />
        </section>
    )
} 

export default Series;

