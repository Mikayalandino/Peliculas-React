import "../Styles/Detalle.scss"
/* import Reparto from "./Reparto" */
import Similares from "./Similares"

import { urlApi, apiKey, lenguageEs, urlImgOriginal, urlImg300 } from "../Variables Auxiliares/auxiliares";

import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Rating from '@mui/material/Rating';

const Detalle = () => {

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
        <article>
            <img className="detalle-img-banner" src={`${urlImgOriginal}${info.backdrop_path}`} alt={info.title ? info.title : info.name} />
            <div className="detalle-container-links">
                <Link className="detalle-links" to={`/${params.tipo}/${params.id}/info`}>INFO</Link>
                {params.tipo === "movie" ?
                    <Link className="detalle-links" to={`/${params.tipo}/${params.id}/videos`}>VIDEOS</Link> :
                    <Link className="detalle-links" to={`/${params.tipo}/${params.id}/episodios`}>EPISODIOS</Link>
                }
                <Link className="detalle-links" to={`/${params.tipo}/${params.id}/reparto`}>REPARTO</Link>
                <Link className="detalle-links" to={`/${params.tipo}/${params.id}/similares`}>SIMILARES</Link>
            </div>
            {params.info === "info" && 
                <div className="info-container">
                    <div className="info-container-img">
                        <img className="info-img-banner" src={`${urlImg300}/${info.poster_path}`} alt={info.title ? info.title : info.name}/>
                    </div>
                    <div className="info-detalles">
                        <div className="info-detalles-title">
                            <h2>{info.title ? info.title : info.name}</h2>
                        </div>
                        {!!info.vote_average && <Rating className="rating-stars" defaultValue={
                            info.vote_average / 2} precision={0.5} readOnly />
                        }
                        <p>{info.overview}</p>
                        {/* TV */}

                        <p>Temporadas: {info.runtime}</p>
                        <p>Episodios: {info.episode_groups}</p>

                        {/*  */}

                        {!!info.duracion &&
                            <p>Duración: {info.runtime ? info.runtime : info.episode_run_time } min.</p>}
                        
                       {/*  <p>Géneros: {info.genres}</p> */}
                        <p>Presupuesto: ${info.budget}</p>
                        <p>Recaudación: ${info.revenue}</p>
                        {!!info.producción && 
                            <p>Producción: {info.known_for_department}</p>
                        }
                       
                        <div>
                            <ul className="info-links">
                                <li>IMDB</li>
                                <li>Twitter</li>
                                <li>Facebook</li>
                                <li>Instagram</li>
                                <li>Link</li>
                            </ul>
                        </div>
                    </div>
                </div>
            }

            {/* recorrer con map */}
            
            {params.info === "video" &&
                <div>Videos</div>
            
            }

            {params.info === "episodios" &&
            
                <div>
                    <div>Episodios</div>
                    <label>
                        <select>
                            <option>Temporada 1</option>
                            <option>Temporada 2</option>
                            <option>Temporada 3</option>
                            <option>Temporada 4</option>
                        </select>
                    </label>

                    <div>
                        <img  src={`https://image.tmdb.org/t/p/w300/profile_path`} alt={`Poster de ${info.name}`}/>
                        <div>
                            <p>EP: {info.episode_number}</p>
                            <h2>{info.name}</h2>    
                        </div>
                        <p>{info.overview}</p>
                    </div>
                </div>
            }


            {params.info === "reparto" &&  

                <div>Reparto</div>

            }

            {params.info === "similares" &&  
                <div>
                    <Similares />
               </div>
            }

        </article>
    )
} 

export default Detalle;