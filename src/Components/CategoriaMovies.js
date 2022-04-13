import { FiArrowRight } from "react-icons/fi";

const CategoriaMovies = ({title}) => {
    return (
        <div>
            <h2 className="title">{title}</h2>
            <FiArrowRight className="FiArrowRight" />
        </div>
    )
} 

export default CategoriaMovies;