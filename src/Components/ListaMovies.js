import useFetch from "../Hooks/useFetch";

import { useParams } from "react-router-dom";
import { useState } from "react";
import CategoriaCardsMovies from "./CategoriaCardsMovies";

const ListaMovies = () => { 

    const params = useParams()
    const [paginado, setPaginado] = useState(1)

    console.log(params)
    const data = useFetch("movie", params.category, paginado)
    
    return (
        <div>
            {params.category === "popular" &&
            <h2>
                Peliculas populares
            </h2>
            }

            {params.category === "top_rated" &&
            <h2>
                Películas con mejores críticas
            </h2>
            }

            {params.category === "upcoming" &&
            <h2>
                Películas a estrenarse
            </h2>
            }
            
            {params.category === "now_playing" &&
            <h2>
                Películas en cines
            </h2>
            }

            <div>
            {!!data && 
                    data.map(movie => 
                   <CategoriaCardsMovies
                        titulo={movie.title}
                        img={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                        id={movie.id}
                        categoria="movie"
                        key={movie.id}
                   />
                )}
            </div>
        </div>
    )
}

export default ListaMovies;