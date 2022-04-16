import { useState, useEffect } from "react";
import {  urlApi, apiKey, lenguageEs } from "../Variables Auxiliares/auxiliares";

const useFetch = (category, subcategory, page) => {

    const [info, setInfo] = useState([])

    useEffect( () => {
        fetch(`${urlApi}/${category}/${subcategory}?${apiKey}&${lenguageEs}&page=${page}`)
        .then( res => res.json())
        .then( data => {
            setInfo(data.results)
        })
    }, [])

    return info
}

export default useFetch;