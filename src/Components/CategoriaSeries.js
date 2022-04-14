import "../Styles/Movies.scss"

import { FiArrowRight } from "react-icons/fi";

import CardsTendencias from "./CardsTendencias";

const CategoriaSeries = ({title, series}) => {
    return (
        <div className="categorias-movies">
            <div className="titulo-categorias-movies">
                <h2 className="title">{title}</h2>
                <FiArrowRight className="FiArrowRight" />
            </div>
            <div className="categorias-lista-movie">
                {series.map(serie => 
                    <CardsTendencias 
                        titulo={serie.title}
                        img={`https://image.tmdb.org/t/p/w300/${serie.poster_path}`}
                        link={`/${serie.id}`}
                        key={serie.id}
                    />)
                }
            </div>
        </div>
    )
} 

export default CategoriaSeries;