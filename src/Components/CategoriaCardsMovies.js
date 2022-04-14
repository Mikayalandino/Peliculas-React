import { Link } from "react-router-dom";

const CategoriaCardsMovies = ({titulo, img, link}) => {
    return (
        <div>
            <Link to={link}>
                <img src={img} alt={titulo}/>
                <h2>{titulo}</h2>
            </Link>
        </div>
    )
}

export default CategoriaCardsMovies;