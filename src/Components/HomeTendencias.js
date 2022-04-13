import "../Styles/HomeTendencias.scss"
import { useEffect, useState } from "react";
import {
  urlApi,
  apiKey,
  lenguageEs,
  urlImg300,
} from "../Variables Auxiliares/auxiliares";

import { FiArrowRight } from "react-icons/fi";
import CardsTendencias from "./CardsTendencias";

const HomeTendencias = ({ title, type }) => {

    const [listaTendencias, setListaTendencias] = useState([])
    
    useEffect(() => {
        fetch(
        `${urlApi}/trending/${type}/week?${apiKey}&${lenguageEs}&page=1`
        ).then((res) =>
        res.json().then((data) => {
            setListaTendencias(data.results);
        })
        );
    }, []);

    return (
        <div className="peliculas-tendencia">
            <div>
                <h2>{title}</h2>
                <FiArrowRight className="FiArrowRight" />
            </div>
                {listaTendencias.map (lista => 
                <CardsTendencias 
                    titulo={lista.title}
                    img={`https://image.tmdb.org/t/p/w200/${lista.poster_path}`}
                    link={`/${lista.id}`}
                />)
                }
        </div>
    );
};

export default HomeTendencias;
