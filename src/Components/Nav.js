import '../Styles/Nav.scss';
import { FiHome as HomeIcon } from "react-icons/fi";
import { FiVideo as MovieIcon } from "react-icons/fi";
import { FiTv as SerieIcon } from "react-icons/fi";
import { FiSearch as SearchIcon } from "react-icons/fi";

const Nav = () => {
    return (
        <nav>
            <ul>
                <li><HomeIcon /></li>
                <li><MovieIcon /></li>
                <li><SerieIcon /></li>
                <label><SearchIcon/>
                    <input type="text" />
                </label>
                
            </ul>
        </nav>
    )
};

export default Nav;