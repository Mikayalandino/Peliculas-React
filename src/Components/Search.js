import '../Styles/Search.scss'

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Search = () => {

    const params = useParams()
    const [searchResultados, setSearchResultados] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/search/multi?api_key=e25295b648c3ef3c3b8c8c319786e4fb&query=${params.title}`)
        .then(res => res.json()
        .then(data => {
            setSearchResultados(data.results)
        }))
    }, [])

    return (
        <div className="search">
            <h1>Resultados para: </h1>
            {searchResultados.map(resultado => (
                <div>
                    {/* <img src={resultado.poster_path} alt={resultado.poster_path}></img> */}
                    <h2 key={resultado.id}>{resultado.name}</h2>
                </div>
            ))
            }

        </div>
    )

} 

export default Search;