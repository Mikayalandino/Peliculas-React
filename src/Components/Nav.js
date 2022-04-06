import '../Styles/Nav.scss';
import { FiHome } from "react-icons/fi";
import { FiVideo } from "react-icons/fi";
import { FiTv } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";

const Nav = () => {
    return (
        <nav>
            <ul>
                <li><FiHome/></li>
                <li><FiVideo/></li>
                <li><FiTv/></li>
                <li><FiSearch/></li>
            </ul>
        </nav>
    )
};

export default Nav;