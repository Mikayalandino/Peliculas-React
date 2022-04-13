import '../Styles/Search.scss'

/* import { urlApi, apiKey, urlImg300 } from '../Variables Auxiliares/auxiliares'; */

/* import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
 */
const Search = () => {
/* 
    const params = useParams()
    const [searchResultados, setSearchResultados] = useState([])

    useEffect(() => {
        fetch(`${urlApi}/3/search/multi?${apiKey}&query=${params.title}&${lenguajeEs}`)
        .then(res => res.json()
        .then(data => {
            setSearchResultados(data.results)
        }))
    }, []) */

    return (
        <div className="search">
            <h1>Resultados para: </h1>
            {/* {searchResultados.map(resultado => (
                <div>
                    <img src={resultado.poster_path} alt={resultado.poster_path}></img>
                    <h2 key={resultado.id}>{resultado.name}</h2>
                </div>
            ))
            } */}

        </div>
    )

} 

export default Search;