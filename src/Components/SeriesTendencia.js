import "../Styles/Home.scss";

import { useEffect, useState } from "react";
import {
  urlApi,
  apiKey,
  lenguageEs,
  urlImg300,
} from "../Variables Auxiliares/auxiliares";

import { FiArrowRight } from "react-icons/fi";

const SeriesTendencia = ({ titles, type }) => {
    const [seriesTendencia, seSeriesTendencia] = useState([])
    
    useEffect(() => {
        fetch(
        `${urlApi}/trending/${type}/week?${apiKey}&${lenguageEs}&page=1`
        ).then((res) =>
        res.json().then((data) => {
            seriesTendencia(data.results);
        })
        );
    }, []);

    return (
        <>
        <div>
            <h2>{titles}</h2>
            <FiArrowRight className="FiArrowRight" />
        </div>
        {seriesTendencia.map (series => <p>{series.title}</p>)

        }
        </>
    );
};

export default SeriesTendencia;
