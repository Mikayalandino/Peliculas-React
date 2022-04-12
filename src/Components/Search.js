import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Search = () => {

    const params = useParams()
    const [searchResultados, setSearchResultados] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/search/multi?query=${params.title}`)
        .then(res => res.json()
        .then(data => {
            setSearchResultados(data)
        }))
    }, [])

    return (
        <div>
            <h1>Resultados para: </h1>
            {searchResultados.map(resultado => (
                <h1 key={resultado.id}>{resultado.name}</h1>
            ))
            }

        </div>
    )

} 

export default Search;

