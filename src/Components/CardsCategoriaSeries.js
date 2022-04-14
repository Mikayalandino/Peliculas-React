import { Link } from "react-router-dom";

const CategoriaCardsSeries = ({titulo, img, link}) => {
  return (
    <div className="cards-tendencia">
      <Link to={link}>
        <img src={img} alt={titulo}/>
        <h2>{titulo}</h2>
      </Link>
    </div>
  );
};

export default CategoriaCardsSeries;