import '../Styles/Nav.scss';
import { FiHome as HomeIcon } from "react-icons/fi";
import { FiVideo as MovieIcon } from "react-icons/fi";
import { FiTv as SerieIcon } from "react-icons/fi";
import { FiSearch as SearchIcon } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <Link className='nav-link' to="/"><HomeIcon /></Link>
            <Link className='nav-link' to="/movie"><MovieIcon /></Link>
            <Link className='nav-link' to="/tv"><SerieIcon /></Link>
            <form className='nav-link'>
                <input type="text" placeholder='Busqueda...'/>
                <button className='serie-icon'><SearchIcon/></button>
            </form>
        </nav>
    )
};

export default Nav;