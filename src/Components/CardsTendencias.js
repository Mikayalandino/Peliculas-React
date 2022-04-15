import { Link } from "react-router-dom";

const CardsTendencias = ({tituloPeliculas, tituloSeries, img, link}) => {
  return (
    <div className="cards-tendencias">
      <Link className="cards-link" to={link}>
        <img src={img} alt={tituloPeliculas}/>
        <h2>{tituloPeliculas}</h2>
        <h2>{tituloSeries}</h2>
      </Link>
    </div>
  );
};

export default CardsTendencias;