import { urlApi, apiKey, lenguageEs, urlImgOriginal, urlImg300 } from "../Variables Auxiliares/auxiliares";
import useFetch from "../Hooks/useFetch";

import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Reparto = () => {

    const params = useParams()
    const [info, setInfo ] = useState([])

   /*  const data = useFetch( params.type, params.category) */

    return (
        <div>
            <h2>Reparto</h2>
            {/* {casting.map (cast =>
                <Link>
                    <img src={`${urlImgOriginal}/profile_path`} alt={`Poster de ${info.name}`}/>
                    <h2>{info.name}</h2>
                    <h3>{info.character}</h3>
                </Link>
            )
            } */}
        </div>
    )
}

export default Reparto;

/* movie

https://api.themoviedb.org/3/movie/414906/credits?api_key=6a93319b2d78795675b8bd9aa0965a95&language=en-US

tv

https://api.themoviedb.org/3/tv/52814/credits?api_key=6a93319b2d78795675b8bd9aa0965a95&language=en-US
 */

/* to={`${person}/${id}/info` */