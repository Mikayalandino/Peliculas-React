import "../Styles/Detalle.scss";
import Episodios from "./Episodios";
import Videos from "./Videos";
import Reparto from "./Reparto";
import Similares from "./Similares";
import BrokenImg from "../Images/BrokenImg.png";

import { FaImdb } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { FaLink } from "react-icons/fa";

import {
  urlApi,
  apiKey,
  lenguageEs,
  urlImgOriginal,
  urlImg300,
} from "../Variables Auxiliares/auxiliares";

import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Rating from "@mui/material/Rating";

const Detalle = () => {
  const params = useParams();
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch(`${urlApi}/${params.tipo}/${params.id}?${apiKey}&${lenguageEs}`)
      .then((res) => res.json())
      .then((data) => {
        setInfo(data);
      });
  }, []);

  return (
    <article>
      {info.backdrop_path ? (
        <img
          className="detalle-img-banner"
          src={`${urlImgOriginal}${info.backdrop_path}`}
          alt={info.title ? info.title : info.name}
        />
      ) : (
        <div className="container-broken-img">
          <img
            className="broken-img detalle-broken-img"
            src={BrokenImg}
            alt="Imagen rota"
          />
        </div>
      )}

      <div className="detalle-container-links">
        <Link
          className="detalle-links"
          to={`/${params.tipo}/${params.id}/info`}
        >
          INFO
        </Link>
        {params.tipo === "movie" ? (
          <Link
            className="detalle-links"
            to={`/${params.tipo}/${params.id}/videos`}
          >
            VIDEOS
          </Link>
        ) : (
          <Link
            className="detalle-links"
            to={`/${params.tipo}/${params.id}/episodios`}
          >
            EPISODIOS
          </Link>
        )}
        <Link
          className="detalle-links"
          to={`/${params.tipo}/${params.id}/reparto`}
        >
          REPARTO
        </Link>
        <Link
          className="detalle-links"
          to={`/${params.tipo}/${params.id}/similares`}
        >
          SIMILARES
        </Link>
      </div>

      {params.info === "info" && (
        <div className="info-container">
          <div className="info-container-img">
            {info.poster_path ? (
              <img
                className="info-img-banner"
                src={`${urlImg300}/${info.poster_path}`}
                alt={info.title ? info.title : info.name}
              />
            ) : (
              <img className="broken-img" src={BrokenImg} alt="Imagen rota" />
            )}
          </div>
          <div className="info-detalles">
            <div className="info-detalles-title">
              <h2>{info.title ? info.title : info.name}</h2>
            </div>
            {!!info.vote_average && (
              <Rating
                className="rating-stars"
                defaultValue={info.vote_average / 2}
                precision={0.5}
                readOnly
              />
            )}
            <p>{info.overview}</p>
            {/* TV */}

            {!!info.temporadas && <p>Temporadas: {info.runtime}</p>}
            {!!info.episodios && <p>Episodios: {info.episode_groups}</p>}

            {!!info.duracion && (
              <p>
                Duración: {info.runtime ? info.runtime : info.episode_run_time}{" "}
                min.
              </p>
            )}

            {/*  <p>Géneros: {info.genres}</p> */}
            <p>Presupuesto: ${info.budget}</p>
            <p>Recaudación: ${info.revenue}</p>
            {!!info.producción && (
              <p>Producción: {info.known_for_department}</p>
            )}

            <div>
              <ul className="info-links">
                <li>
                  <a href="#">
                    <FaImdb />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiOutlineTwitter />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <AiFillFacebook />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FiInstagram />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaLink />
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </div>
      )}

      {/* recorrer con map */}

      {params.info === "video" && <Videos 
      id={params.id} />}

      {params.info === "episodios" && (
        <Episodios id={params.id} temporadas={info.seasons} />
      )}

      {params.info === "reparto" && <Reparto/>}

      {params.info === "similares" && <Similares 
      />}
    </article>
  );
};

export default Detalle;
