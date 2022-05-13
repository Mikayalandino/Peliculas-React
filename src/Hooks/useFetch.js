import { useState, useEffect } from "react";
import { urlApi, apiKey, lenguageEs } from "../Variables Auxiliares/auxiliares";

const useFetch = (url, category, subcategory, page) => {
  // muy bien resuelto
  const [info, setInfo] = useState([]);
  const urlBase = `${urlApi}/${category}/${subcategory}?${apiKey}&${lenguageEs}&page=${page}`;
  const urlTrending = `${urlApi}/${category}/tv/week?${apiKey}&${lenguageEs}&page=${page}`;
  const verificarLink = () => (url === true ? urlTrending : urlBase);

  const linkVerificado = verificarLink();

  useEffect(() => {
    fetch(linkVerificado)
      .then((res) => res.json())
      .then((data) => {
        setInfo(data.results);
      });
  }, []);

  return info;
};

export default useFetch;
