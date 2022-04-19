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
            const info = data.results
            setListaSeriesPopulares(info.splice(0,5));
        })
        );
    }, []);

    useEffect(() => {
        fetch(
        `${urlApi}/tv/top_rated?${apiKey}&${lenguageEs}&page=1`
        ).then((res) =>
        res.json().then((data) => {
            const info = data.results
            setListaSeriesMejoresCriticas(info.splice(0,5));
        })
        );
    }, []);

    useEffect(() => {
        fetch(
        `${urlApi}/tv/on_the_air?${apiKey}&${lenguageEs}&page=1`
        ).then((res) =>
        res.json().then((data) => {
            const info = data.results
            setListaSeriesAlAire(info.splice(0,5));
        })
        );
    }, []);

    return (
        <section>
            <CategoriaSeries 
                title="Series populares"
                series={listaSeriesPopulares}
                linkRuta="popular"
            />
            <CategoriaSeries 
                title="Series con mejores críticas"
                series={listaSeriesMejoresCriticas}
                linkRuta="top_rated"
            />
            <CategoriaSeries 
                categoria="tv"
                title="Series al aire"
                series={listaSeriesAlAire}
                linkRuta="on_the_air"
            />
        </section>
    )
} 

export default Series;

