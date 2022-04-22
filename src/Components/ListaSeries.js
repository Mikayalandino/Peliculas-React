import useFetch from "../Hooks/useFetch";
import CategoriaCardsSeries from "./CategoriaCardsSeries"

import { useParams } from "react-router-dom";
import { useState } from "react";

const ListaSeries = () => { 

    const params = useParams()
    const [paginado, setPaginado] = useState(1)

    const data = useFetch("tv", params.category, paginado)
    
    return (
        <div>
            {params.category === "popular" &&
            <h2>
                Series populares
            </h2>
            }

            {params.category === "top_rated" &&
            <h2>
                Series con mejores críticas
            </h2>
            }

            {params.category === "on_the_air" &&
            <h2>
                Series al aire
            </h2>
            }

            {params.category === "trending" &&
                <h2>
                    Series tendencia
                </h2>
            }
        
            <div>            
                {!!data && 
                    data.map(serie => 
                    <CategoriaCardsSeries
                        titulo={serie.name}
                        img={`https://image.tmdb.org/t/p/w300/${serie.poster_path}`}
                        id={serie.id}
                        categoria="tv"
                        key={serie.id}
                    />
                )}
            </div>
        </div>
    )
}

export default ListaSeries;