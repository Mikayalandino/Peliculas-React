import "../Styles/Movies.scss"

import { FiArrowRight } from "react-icons/fi";

import CategoriaCardsSeries from "./CategoriaCardsSeries";

const CategoriaSeries = ({title, series}) => {
    return (
        <div className="categorias-movies">
            <div className="titulo-categorias-movies">
                <h2 className="title">{title}</h2>
                <FiArrowRight className="FiArrowRight" />
            </div>
            <div className="categorias-lista-movie">
                {series.map(serie => 
                    <CategoriaCardsSeries 
                        titulo={serie.name}
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