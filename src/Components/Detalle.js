import { urlImgOriginal } from "../Variables Auxiliares/auxiliares";

import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Detalle = () => {

    const params = useParams()
    const [info, setInfo ] = useState([])

    useEffect( () => {
        fetch(`https://api.themoviedb.org/3/${!!params.categoria ? params.categoria : params.types}/${params.id}?api_key=e25295b648c3ef3c3b8c8c319786e4fb&language=es-ES`)
        .then( res => res.json())
        .then( data => {
            setInfo(data)
        })
    }, [])

    return (
        <section>
            <img src={`${urlImgOriginal}${info.backdrop_path}`} alt={info.id}/>
        </section>
        
    )
} 

export default Detalle;