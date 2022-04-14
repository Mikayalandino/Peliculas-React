import { FiArrowRight } from "react-icons/fi";

const CategoriaSeries = ({title, series}) => {
    return (
        <div>
            <h2 className="title">{title}</h2>
            <FiArrowRight className="FiArrowRight" />
            <div>
                {series.map(serie => <h3 key={serie.id}>{serie.title}</h3>)}
            </div>
        </div>
    )
} 

export default CategoriaSeries;