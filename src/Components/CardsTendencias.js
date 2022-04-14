import "../Styles/CardsTendencias.scss"
import { Link } from "react-router-dom";

const CardsTendencias = ({tituloPeliculas, tituloSeries, img, link}) => {
  return (
    <div className="cards-tendencia">
      <Link to={link}>
        <img src={img} alt={tituloPeliculas}/>
        <h2>{tituloPeliculas}</h2>
        <h2>{tituloSeries}</h2>
      </Link>
    </div>
  );
};

export default CardsTendencias;