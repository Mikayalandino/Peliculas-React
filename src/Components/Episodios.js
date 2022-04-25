import "../Styles/Episodios.scss";

import {
  urlApi,
  apiKey,
  lenguageEs,
  urlImg300,
} from "../Variables Auxiliares/auxiliares";
import BrokenImg from "../Images/BrokenImg.png";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Episodios = ({ id, temporadas }) => {
  const params = useParams();
  const [info, setInfo] = useState([]);
  const [selectOption, setSelectOption] = useState(1);

  useEffect(() => {
    fetch(`${urlApi}/tv/${id}/season/${selectOption}?${apiKey}&${lenguageEs}`)
      .then((res) => res.json())
      .then((data) => {
        setInfo(data.episodes);
      });
  }, [selectOption]);

  const handleChange = (e) => {
    setSelectOption(e.target.value);
  };

  console.log(info);

  return (
    <div className="container-episodios">
      <div>
        <label>
          <select onChange={handleChange}>
            {!!temporadas &&
              temporadas.map((temporada) => (
                <option value={temporada.season_number} key={temporada.id}>
                  Temporada {temporada.season_number}{" "}
                </option>
              ))}
          </select>
        </label>
      </div>

      <div className="episodios-cards">
        {!!info &&
          info.map((episodes) => (
            <div className="episodios-container">
              {episodes.still_path ? (
                <img
                  src={`${urlImg300}/${episodes.still_path}`}
                  alt={`Poster de ${episodes.name}`}
                />
              ) : (
                <img className="broken-img epidodes-img-broken" src={BrokenImg} alt="Imagen rota" />
              )}
              <div className="episodios-info-top">
                <p>EP:{episodes.episode_number}</p>
                <h3>{episodes.name}</h3>
              </div>
              <div className="episodios-info-bottom">
                <p>{episodes.overview}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Episodios;
