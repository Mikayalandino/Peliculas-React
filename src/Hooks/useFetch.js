import { useState, useEffect } from "react";
import { apiKey } from "../Variables Auxiliares/auxiliares";

const useHook = (category, subcategory, page) => {

    const [info, setInfo] = useState([])

    useEffect( () => {
        fetch(`https://api.themoviedb.org/3/${category}/${subcategory}?api_key=${apiKey}&language=es-Es&page=${page}`)
        .then( res => res.json())
        .then( data => {
            setInfo(data.results)
        })
    }, [page])

    return info
}

export default useHook;