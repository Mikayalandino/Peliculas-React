import { Link } from "react-router-dom";
import CardsTendencias from "./CardsTendencias";

const CategoriaCardsMovies = ({ titulo, img, id, categoria }) => {
  // este componente es muuuuy parecido a CardsTendencias...! deberian ser iguales, y resolver las diferencias con condicionales
  const handleMouseEnter = (e) => {
    e.target.style.transform = "scale(1.1)";
    e.target.style.transition = "0.5s";
  };

  const handleMouseLeave = (e) => {
    e.target.style.transform = "scale(1)";
  };

  return (
    <div className="cards-tendencias">
      <Link className="cards-link" to={`/${categoria}/${id}/info`}>
        <img
          src={img}
          alt={titulo}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <h2>{titulo}</h2>
      </Link>
    </div>
  );
};

export default CategoriaCardsMovies;
