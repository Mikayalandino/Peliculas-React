import "../Styles/HomeTendencias.scss"
import { Link } from 'react-router-dom';

import { useEffect, useState } from "react";
import {
  urlApi,
  apiKey,
  lenguageEs,
  urlImg300,
} from "../Variables Auxiliares/auxiliares";

import { FiArrowRight } from "react-icons/fi";

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
            <Link className='home-tendencia-title' to='/movie/:category/page/:page'>
                {listaTendencias.map (lista => 
                <p key={lista.id}>{lista.title}</p>)
                }
            </Link>
        </div>
    );
};

export default HomeTendencias;
