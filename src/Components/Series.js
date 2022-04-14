import CategoriaSeries from "./CategoriaSeries";
import { useEffect, useState } from "react";
import { urlApi, apiKey, lenguageEs} from "../Variables Auxiliares/auxiliares";

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
        <div className="movies">
            <CategoriaSeries 
                title="Series popularess"
                series={listaSeriesPopulares}
            />
            <CategoriaSeries 
                title="Series con mejores críticas"
                series={listaSeriesMejoresCriticas}
            />
            <CategoriaSeries 
                title="Películas a estrenarse"
                series={listaSeriesAlAire}
            />
        </div>
    )
} 

export default Series;

