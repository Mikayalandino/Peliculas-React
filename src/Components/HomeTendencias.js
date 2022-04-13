import "../Styles/HomeTendencias.scss"
import { useEffect, useState } from "react";
import { urlApi, apiKey, lenguageEs} from "../Variables Auxiliares/auxiliares";

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
        <div>
            <div className="peliculas-tendencia">
                <h2 className="title">{title}</h2>
                <FiArrowRight className="FiArrowRight" />
            </div>
            <div className="cards-tendencias">
                {listaTendencias.map (lista => 
                    <CardsTendencias 
                    titulo={lista.title}
                    img={`https://image.tmdb.org/t/p/w300/${lista.poster_path}`}
                    link={`/${lista.id}`}
                    key={lista.id}
                    />)
                }
            </div>
        </div>
      
    );
};

export default HomeTendencias;
