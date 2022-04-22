import "../Styles/Home.scss"
import CategoriaCardsMovies from "./CategoriaCardsMovies";

import { Link } from 'react-router-dom';
import { FiArrowRight } from "react-icons/fi";

const CategoriaMovies = ({title, movies, linkRuta}) => {

    return (
        <div>
            <Link className="peliculas-tendencia" to={`/movie/${linkRuta}/page/1`}>
                <h2 className="title">{title}</h2>
                <FiArrowRight className="FiArrowRight" />
            </Link>
            <div className="cards-tendencias">
                {!!movies && 
                    movies.map(movie => 
                   <CategoriaCardsMovies
                        titulo={movie.title}
                        img={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                        id={movie.id}
                        categoria="movie"
                        key={movie.id}
                   />
                )}
            </div>
        </div>
    )
} 

export default CategoriaMovies;