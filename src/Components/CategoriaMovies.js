import "../Styles/Movies.scss"

import { FiArrowRight } from "react-icons/fi";

const CategoriaMovies = ({title, movies}) => {
    return (
        <div className="categorias-movies">
            <div className="titulo-categorias-movies">
                <h2 className="title">{title}</h2>
                <FiArrowRight className="FiArrowRight" />
            </div>
            <div className="categorias-lista-movie">
                {movies.map(movie => <h3 key={movie.id}>{movie.title}</h3>)}
            </div>
        </div>
    )
} 

export default CategoriaMovies;