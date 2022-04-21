import { urlApi, apiKey, lenguageEs, urlImgOriginal, urlImg300 } from "../Variables Auxiliares/auxiliares";

import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Reparto = () => {

    const params = useParams()
    const [info, setInfo ] = useState([])

    useEffect( () => {
        fetch(`${urlApi}/${params.tipo}/${params.id}?${apiKey}&${lenguageEs}`)
        .then( res => res.json())
        .then( data => {
            setInfo(data)
        })
    }, [])

    return (
        <div>
            {/* {casting.map (cast =>
                <div>
                    <img src={`${urlImgOriginal}/profile_path`} alt={`Poster de ${info.name}`}/>
                    <h2>{info.name}</h2>
                    <h3>{info.character}</h3>
                </div>
            )
            } */}
        </div>
    )
}

export default Reparto;