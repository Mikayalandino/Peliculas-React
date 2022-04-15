import '../Styles/Search.scss'
import { urlApi, apiKey, lenguageEs } from '../Variables Auxiliares/auxiliares';

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Search = () => {

    const params = useParams()
    const [searchResultados, setSearchResultados] = useState([])

    useEffect(() => {
        fetch(`${urlApi}/search/multi?${apiKey}&query=${params.title}&${lenguageEs}`)
        .then(res => res.json()
        .then(data => {
            setSearchResultados(data.results)
        }))
    }, [])

    return (
        <div className="search">
            <h1>Resultados para: </h1>
            <div className='search-cards'>
                {searchResultados.map(resultado => (
                    <div>
                        <img 
                            src={`https://image.tmdb.org/t/p/w300/${resultado.poster_path}`} 
                            alt={resultado.poster_path} 
                            key={resultado.id}
                        />
                        <h2 key={resultado.id}>{resultado.title}</h2>
                    </div>
                ))
                }
            </div>

        </div>
    )

} 

export default Search;