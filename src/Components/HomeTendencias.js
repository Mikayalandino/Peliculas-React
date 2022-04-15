import "../Styles/HomeTendencias.scss"
import { useEffect, useState } from "react";
import { urlApi, apiKey, lenguageEs} from "../Variables Auxiliares/auxiliares";

import { FiArrowRight } from "react-icons/fi";

import CardsTendencias from "./CardsTendencias";

const HomeTendencias = ({ title, types }) => {

    const [listaTendencias, setListaTendencias] = useState([])
    
    useEffect(() => {
        fetch(
        `${urlApi}/trending/${types}/week?${apiKey}&${lenguageEs}&page=1`
        ).then((res) =>
        res.json().then((data) => {        
            const info = data.results
            setListaTendencias(info.splice(0,5));
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
                        tituloPeliculas={lista.title}
                        tituloSeries={lista.name}
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
