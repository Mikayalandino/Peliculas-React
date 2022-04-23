import "../Styles/Home.scss";
import CategoriaCardsSeries from "./CategoriaCardsSeries";

import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const CategoriaSeries = ({ title, series, linkRuta }) => {
  return (
    <div>
      <Link className="peliculas-tendencia" to={`/tv/${linkRuta}/page/1`}>
        <h2 className="title">{title}</h2>
        <FiArrowRight className="FiArrowRight" />
      </Link>
      <div className="cards-tendencias">
        {series.map((serie) => (
          <CategoriaCardsSeries
            titulo={serie.name}
            img={`https://image.tmdb.org/t/p/w300/${serie.poster_path}`}
            id={serie.id}
            categoria="tv"
            key={serie.id}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoriaSeries;
