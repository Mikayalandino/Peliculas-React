import useFetch from "../Hooks/useFetch";
import {
  urlApi,
  apiKey,
  lenguageEs,
  urlImg300,
} from "../Variables Auxiliares/auxiliares";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Episodios = ({ id, seasons }) => {
  const params = useParams();
  const [info, setInfo] = useState([]);
  const [selectOption, setSelectOption] = useState(1);

  useEffect(() => {
    fetch(`${urlApi}/tv/${id}/season/${selectOption}?${apiKey}&${lenguageEs}`)
      .then((res) => res.json())
      .then((data) => {
        setInfo(data);
      });
  }, [selectOption]);

  const handleChange = (e) => {
    setSelectOption(e.target.value);
  };

  return (
    <div>
      <label>
        <select onChange={handleChange}>
          <option>Temporada </option>
        </select>
      </label>
      {/*  {info.map( episodes =>
        <div>
            <img
            src={`${urlImg300}/still_path`}
            alt={`Poster de ${episodes.name}`}
            />
            <div>
            <p>EP:{episodes.episode_number}</p>
            <h2>{episodes.name}</h2>
            </div>
            <p>{episodes.overview}</p>
        </div> 
        )
      } */}
    </div>
  );
};

export default Episodios;
