import "../Styles/Nav.scss";
import { FiHome as HomeIcon } from "react-icons/fi";

import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { FiVideo as MovieIcon } from "react-icons/fi";
import { FiTv as SerieIcon } from "react-icons/fi";
import { FiSearch as SearchIcon } from "react-icons/fi";

const Nav = () => {
  const navigate = useNavigate();
  const [valorDelInput, setValorDelInput] = useState("");

  const handleSumbitSearchNav = (e) => {
    e.preventDefault();
    navigate(`/search/${valorDelInput}`);
  };

  const handleChangeInputNav = (e) => {
    setValorDelInput(e.target.value);
  };

  return (
    <nav className="nav-bar">
      {/* usa aria label si no hay texto en el link */}
      <Link className="nav-link" to="/">
        <HomeIcon />
      </Link>
      <Link className="nav-link" to="/movie">
        <MovieIcon />
      </Link>
      <Link className="nav-link" to="/tv">
        <SerieIcon />
      </Link>
      <form className="nav-link" onSubmit={handleSumbitSearchNav}>
        <input
          className="nav-input"
          type="text"
          placeholder="Busqueda..."
          value={valorDelInput}
          onChange={handleChangeInputNav}
        />
        {/* usa aria label si no hay texto */}
        <button className="search-icon">
          <SearchIcon />
        </button>
      </form>
    </nav>
  );
};

export default Nav;
