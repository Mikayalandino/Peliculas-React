import "../Styles/HomeTendencias.scss"
import CardsTendencias from "./CardsTendencias";
import { urlApi, apiKey, lenguageEs} from "../Variables Auxiliares/auxiliares";

import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import { FiArrowRight } from "react-icons/fi";


const HomeTendencias = ({ title, types, linkRuta }) => {

    const [listaTendencias, setListaTendencias] = useState([])
    
    useEffect(() => {
        fetch(
        `${urlApi}/trending/${types}/week?${apiKey}&${lenguageEs}&page=1`
        ).then((res) =>
        res.json().then((data) => {        
            setListaTendencias(data.results);
        })
        );
    }, [types]);

    const listaRecortada = listaTendencias.slice(0,5)

    return (
        <div className="container-home">
            <Link className="peliculas-tendencia" to={`/${types}/${linkRuta}/page/1`}>
                <h2 className="title">{title}</h2>
                <FiArrowRight className="FiArrowRight" />
            </Link>
            <div className="cards-tendencias">
                {listaRecortada.map (lista => 
                    <CardsTendencias 
                        tituloPeliculas={lista.title}
                        tituloSeries={lista.name}
                        img={`https://image.tmdb.org/t/p/w300/${lista.poster_path}`}
                        link={`/${lista.id}`}
                        key={lista.id}
                        types={types}
                        id={lista.id}
                    />)
                }
            </div>
        </div>
      
    );
};

export default HomeTendencias;
