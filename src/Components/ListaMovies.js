import "../Styles/HomeTendencias.scss"

import CategoriaCardsMovies from "./CategoriaCardsMovies";
import useFetch from "../Hooks/useFetch";
import Paginacion from "./Paginacion";

import { useParams } from "react-router-dom";
import { useState } from "react";

const ListaMovies = () => { 

    const params = useParams()
    const [paginado, setPaginado] = useState(1)

    const data = useFetch("movie", params.category, paginado)
    
    return (
        <section>
            <div className="container-lista-cards">
                {params.category === "popular" &&
                    <h2 className="title">
                        Peliculas populares
                    </h2>
                }

                {params.category === "top_rated" &&
                    <h2 className="title">
                        Películas con mejores críticas
                    </h2>
                }

                {params.category === "upcoming" &&
                    <h2 className="title">
                        Películas a estrenarse
                    </h2>
                }
                
                {params.category === "now_playing" &&
                    <h2 className="title">
                        Películas en cines
                    </h2>
                }

                <div className="cards-tendencias">
                    {!!data && 
                        data.map(movie => 
                            <CategoriaCardsMovies
                                titulo={movie.title}
                                img={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                                id={movie.id}
                                categoria="movie"
                                key={movie.id}
                            />                  
                        )
                    }
                </div>
            </div>

            <Paginacion 
            />
            
        </section>
    )
}

export default ListaMovies;