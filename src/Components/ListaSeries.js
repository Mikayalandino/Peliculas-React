import "../Styles/HomeTendencias.scss"

import useFetch from "../Hooks/useFetch";
import CategoriaCardsSeries from "./CategoriaCardsSeries"
import Paginacion from "./Paginacion";

import { useParams } from "react-router-dom";
import { useState } from "react";

const ListaSeries = () => { 

    const params = useParams()
    const [paginado, setPaginado] = useState(1)

    const data = useFetch("tv", params.category, paginado)
    
    return (
        <section>
            <div className="container-lista-cards">

                {params.category === "popular" &&
                <h2 className="title">
                    Series populares
                </h2>
                }

                {params.category === "top_rated" &&
                <h2 className="title">
                    Series con mejores críticas
                </h2>
                }

                {params.category === "on_the_air" &&
                <h2 className="title">
                    Series al aire
                </h2>
                }

                {params.category === "trending" &&
                    <h2 className="title">
                        Series que son tendencia
                    </h2>
                    
                }
            
                <div className="cards-tendencias">            
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
            
            <Paginacion 
            />
            
        </section>
    )
}

export default ListaSeries;