import { Link } from "react-router-dom";

const CategoriaCardsSeries = ({titulo, img, link}) => {

    const handleMouseEnter = (e) => {
        e.target.style.transform = "scale(1.1)";
        e.target.style.transition = "0.5s";
      };
    
      const handleMouseLeave = (e) => {
        e.target.style.transform = "scale(1)";
      };

    return (
        <div className="cards-tendencias">
            <Link className="cards-link" to={link}>
                <img 
                    src={img} 
                    alt={titulo}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                />
                <h2>{titulo}</h2>
            </Link>
        </div>
    )
}

export default CategoriaCardsSeries;