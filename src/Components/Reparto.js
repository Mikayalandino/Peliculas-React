import {
  urlApi,
  apiKey,
  lenguageEs,
  urlImgOriginal,
  urlImg300,
} from "../Variables Auxiliares/auxiliares";

import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Reparto = () => {
  const params = useParams();
  const [data, setData] = useState();
  const [paginado, setPaginado] = useState(1);

  useEffect(() => {
    fetch(
      `${urlApi}/${params.tipo}/${params.id}/credits?${apiKey}&${lenguageEs}&page=${paginado}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.cast);
      });
  }, [paginado]);

  console.log(data)

  return (
    <div>
      <h2>Reparto</h2>
      {!!data &&
        data.map((cast) => (
          <div key={cast.id}>
            <img
              src={`https://image.tmdb.org/t/p/w300/${cast.profile_path}`}
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


/* to={`${person}/${id}/info` */
