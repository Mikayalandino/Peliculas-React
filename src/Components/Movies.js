import CategoriaMovies from "./CategoriaMovies";

const Movies = () => {
    return (
        <div className="categorias-movies">
            <CategoriaMovies 
                title="Películas populares"
            />
            <CategoriaMovies 
                title="Películas con mejores críticas"
            />
            <CategoriaMovies 
                title="Películas a estrenarse"
            />
            <CategoriaMovies 
                title="Películas en cines"
            />

        </div>
    )
} 

export default Movies;