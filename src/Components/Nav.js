import '../Styles/Nav.scss';
import { FiHome as HomeIcon } from "react-icons/fi";
import { FiVideo as VideoIcon } from "react-icons/fi";
import { FiTv as TvIcon } from "react-icons/fi";
import { FiSearch as SearchIcon } from "react-icons/fi";

const Nav = () => {
    return (
        <nav>
            <ul>
                <li><HomeIcon/></li>
                <li><VideoIcon/></li>
                <li><TvIcon/></li>
                <li><input type="text"><SearchIcon/></input></li>
            </ul>
        </nav>
    )
};

export default Nav;