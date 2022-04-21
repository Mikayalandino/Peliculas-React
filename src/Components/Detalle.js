import "../Styles/Detalle.scss"

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
                <Link className="detalle-links" to={`/movie/id/info`}>INFO</Link>
                <Link className="detalle-links" to={`/movie/id/videos`}>EPISODIOS</Link>
                <Link className="detalle-links" to={`/movie/id/reparto`}>REPARTO</Link>
                <Link className="detalle-links" to={`/movie/id/videos`}>VIDEOS</Link>
                <Link className="detalle-links" to={`/movie/id/similares`}>SIMILARES</Link>
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
                        <p>Duración: {info.runtime} min.</p>
                        {/* <p>Géneros: {info.genres}</p> */}
                        <p>Presupuesto: ${info.budget}</p>
                        <p>Recaudación: ${info.revenue}</p>
                        {/* <p>Producción: {info.production_companies}</p> */}
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
            {/* {params.info === "episodios" &&  
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