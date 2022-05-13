import "../Styles/HomeTendencias.scss";

import { Link } from "react-router-dom";

const CardsTendencias = ({ tituloPeliculas, tituloSeries, img, id, types }) => {
  const handleMouseEnter = (e) => {
    // bien resuelto!
    e.target.style.transform = "scale(1.1)";
    e.target.style.transition = "0.5s";
  };

  const handleMouseLeave = (e) => {
    e.target.style.transform = "scale(1)";
  };

  return (
    <div className="cards-tendencias">
      <Link className="cards-link" to={`/${types}/${id}/info`}>
        <img
          src={img}
          alt={tituloPeliculas}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <h2>{tituloPeliculas ? tituloPeliculas : tituloSeries}</h2>
      </Link>
    </div>
  );
};

export default CardsTendencias;
