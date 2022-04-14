import "../Styles/Movies.scss"

import { FiArrowRight } from "react-icons/fi";
import CardsTendencias from "./CardsTendencias";

const CategoriaMovies = ({title, movies}) => {
    return (
        <div className="categorias-movies">
            <div className="titulo-categorias-movies">
                <h2 className="title">{title}</h2>
                <FiArrowRight className="FiArrowRight" />
            </div>
            <div className="categorias-lista-movie">
                {movies.map(movie => 
                    <CardsTendencias 
                    titulo={movie.title}
                    img={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                    link={`/${movie.id}`}
                    key={movie.id}
                    />
                )}
            </div>
        </div>
    )
} 

export default CategoriaMovies;