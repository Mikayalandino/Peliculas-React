import CardsTendencias from "./CardsTendencias";
import {
  urlApi,
  apiKey,
  lenguageEs,
  urlImgOriginal,
  urlImg300,
} from "../Variables Auxiliares/auxiliares";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Similares = ({ types, type }) => {
  const params = useParams();
  const [data, setData] = useState();
  const [paginado, setPaginado] = useState(1);

  useEffect(() => {
    fetch(
      `${urlApi}/${params.tipo}/${params.id}/similar?${apiKey}&${lenguageEs}&page=${paginado}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
      });
  }, [paginado]);

  return (
    <div className="cards-tendencias">
      {!!data &&
        data.map((lista) => (
          <CardsTendencias
            tituloPeliculas={lista.title}
            tituloSeries={lista.name}
            img={`${urlImg300}/${lista.poster_path}`}
            link={`/${lista.id}`}
            key={lista.id}
            types={types}
            type={type}
            id={lista.id}
          />
        ))}
    </div>
  );
};

export default Similares;
