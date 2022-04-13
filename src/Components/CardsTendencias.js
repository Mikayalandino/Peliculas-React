import { Link } from "react-router-dom";

const CardsTendencias = ({titulo, img, link}) => {
  return (
    <div className="cards-tendencia">
      <Link to={link}>
        <img src={img} />
        <h2>{titulo}</h2>
      </Link>
    </div>
  );
};

export default CardsTendencias;