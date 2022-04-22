import "../Styles/HomeTendencias.scss"

import useFetch from "../Hooks/useFetch";

const ListaTendenciasSeries= () => {

    /* const data = useFetch( params.category, "movie", "week", paginado)
     */
 /*    useEffect( () => {
        fetch(`${urlApi}/trending/movie/week?${apiKey}&${lenguageEs}&page=${page}`)
        .then( res => res.json())
        .then( data => {
            setInfo(data.results)
        })
    }, []) */

    return (
        <section>
             <div className="container-lista-cards">
                {/* <div className="cards-tendencias">
                    {!!data && 
                        data.map(series => 
                            <CategoriaCardsSeries 
                            titulo={series.name}
                            img={`https://image.tmdb.org/t/p/w300/${series.poster_path}`}
                            id={series.id}
                            categoria="tv"
                            key={series.id}
                         />)                  
                        
                    }
                </div> */}

             </div>
        </section>
    )
}

export default ListaTendenciasSeries;