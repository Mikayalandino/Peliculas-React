import "../Styles/Detalle.scss"

import { urlApi, apiKey, lenguageEs, urlImgOriginal } from "../Variables Auxiliares/auxiliares";

import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

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
            <img src={`${urlImgOriginal}${info.backdrop_path}`} />
            <div className="detalle-container-links">
                <Link className="detalle-links" to={`/movie/id/info`}>INFO</Link>
                <Link className="detalle-links" to={`/movie/id/videos`}>EPISODIOS</Link>
                <Link className="detalle-links" to={`/movie/id/reparto`}>REPARTO</Link>
                <Link className="detalle-links" to={`/movie/id/videos`}>VIDEOS</Link>
                <Link className="detalle-links" to={`/movie/id/similares`}>SIMILARES</Link>
            </div>
            {/* {params.info === "info" && 
                <div className="info-container">
                    <div>
                        <img src={`https://image.tmdb.org/t/p/original${info.poster_path}`} alt={info.title}/>
                    </div>
                    <div className="info-detalles">
                        <h2>{info.title}</h2>
                        <p>⭐⭐⭐⭐⭐</p>
                        <p>Duración: {info.runtime}</p>
                        <p>Géneros: {info.genres}</p>
                        <p>Presupuesto: {info.budget}</p>
                        <p>Recaudación: {info.revenue}</p>
                        <p>Producción: {info.production_companies}</p>
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
            {params.info === "episodios" &&  
                <Link to={`/tv/id/seasons/1`}>
                    <div>
                        <label>
                            <select>
                                <option>1</option>
                            </select>
                        </label>
                        <div>
                            <img src={`${urlImgOriginal}/profile_path`} alt={`Poster de ${info.name}`}/>
                            <div>
                                <h3>EP: {info.episode_number}</h3>
                                <h2>{info.name}</h2>    
                            </div>
                            <p>{info.overview}</p>
                        </div>
                    </div>
                </Link>
            }
            {params.info === "reparto" &&  
                <Link to={`person/id/info`}>
                    <div>
                        <img src={`${urlImgOriginal}/profile_path`} alt={`Poster de ${info.name}`}/>
                        <h2>{info.name}</h2>
                        <h3>{info.character}</h3>
                    </div>
                </Link>
            }
            {params.info === "videos" &&  
                <Link to={`movie/id/videos`}>
                    Video
                </Link>
            }
            {params.info === "similares" &&  
                <div>
                    <Link to={`movie/id/similar`}>
                        <div>
                            Card
                        </div>
                    </Link>
               </div>
            } */}
        </article>
        
    )
} 

export default Detalle;