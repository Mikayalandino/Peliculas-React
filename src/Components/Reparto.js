import {
  urlApi,
  apiKey,
  lenguageEs,
  urlImgOriginal,
  urlImg300,
} from "../Variables Auxiliares/auxiliares";
import useFetch from "../Hooks/useFetch";

import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Reparto = ({ id }) => {
  const params = useParams();
  const [info, setInfo] = useState([]);
  const [paginado, setPaginado] = useState(1);

  useEffect(() => {
    fetch(`${urlApi}/movie/${id}/credits?${apiKey}&${lenguageEs}&page=${paginado}`).then(
      (res) =>
        res.json().then((data) => {
          setInfo(data.results);
        })
    );
  }, [paginado]);

  console.log(info)

  return (
    <div>
      <h2>Reparto</h2>
      {!!info && info.map((cast) => (
        <div>
          <img
            src={`${urlImgOriginal}/profile_path`}
            alt={`Poster de ${cast.name}`}
          />
          <h2>{cast.name}</h2>
          <h3>{cast.character}</h3>
        </div>
      ))}
    </div>
  );
};

export default Reparto;

/* movie

https://api.themoviedb.org/3/movie/414906/credits?api_key=6a93319b2d78795675b8bd9aa0965a95&language=en-US

tv

https://api.themoviedb.org/3/tv/52814/credits?api_key=6a93319b2d78795675b8bd9aa0965a95&language=en-US
 */

/* to={`${person}/${id}/info` */
