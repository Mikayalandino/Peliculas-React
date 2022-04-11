import '../Styles/Home.scss'
import {FiArrowRight} from "react-icons/fi";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section>
            <h1>Home</h1>
            <div>
                <Link className='home-peliculas-tendencia-title' to='/movie/:category/page/:page'>
                    <h2>Películas que son tendencia</h2>
                    <FiArrowRight className='FiArrowRight' />
                </Link>
            </div>
            <div>
                <Link className='home-peliculas-tendencia-title' to='/tv/:category/page/:page'>
                    <h2>Series que son tendencia</h2>
                    <FiArrowRight className='FiArrowRight' />
                </Link>
            </div>
        </section>
    )
} 

export default Home;