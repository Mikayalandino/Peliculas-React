import '../Styles/Home.scss'

import { Link } from 'react-router-dom';

import PeliculasTendencia from "../Components/PeliculasTendencia"
import SeriesTendencia from './SeriesTendencia';

const Home = () => {

    return (
        <section>
            <h1>Home</h1>
            <div>
                <Link className='home-tendencia-title' to='/movie/:category/page/:page'>
                    <PeliculasTendencia 
                        titles="Películas que son tendencia"
                        type="movie"/>
                </Link>
            </div>
            <div>
                <Link className='home-tendencia-title' to='/tv/:category/page/:page'>
                    <SeriesTendencia 
                        titles="Series que son tendencia"
                        type="tv"/>
                </Link>
            </div>
        </section>
    )
} 

export default Home;