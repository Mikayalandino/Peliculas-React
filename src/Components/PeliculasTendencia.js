import "../Components/PeliculasTendencia"

import { useEffect, useState } from "react";
import {
  urlApi,
  apiKey,
  lenguageEs,
  urlImg300,
} from "../Variables Auxiliares/auxiliares";

import { FiArrowRight } from "react-icons/fi";

const PeliculasTendencia = ({ titles, type }) => {

    const [peliculasTendencia, setPeliculasTendencia] = useState([])
    
    useEffect(() => {
        fetch(
        `${urlApi}/trending/${type}/week?${apiKey}&${lenguageEs}&page=1`
        ).then((res) =>
        res.json().then((data) => {
            setPeliculasTendencia(data.results);
        })
        );
    }, []);

    return (
        <div className="peliculas-tendencia">
            <div>
                <h2>{titles}</h2>
                <FiArrowRight className="FiArrowRight" />
            </div>
            {peliculasTendencia.map (peliculas => 
            <p key={peliculas.id}>{peliculas.title}</p>)
            }
        </div>
    );
};

export default PeliculasTendencia;
