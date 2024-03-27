import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <h2 className="nav-title">FİLM.</h2>
      <ul className="nav-list-container">
        <NavLink to={"/"}>Home</NavLink>
        <li className="movies">
          Filmler
          <ul className="movies-category">
            <Link to={"/popularmovies"} className="popular-movies">
              Popüler
            </Link>
            <Link to={"/bestratedmovies"} className="best-rated-movies">
              En Fazla Oy Alanlar
            </Link>
          </ul>
        </li>
        <li className="series">
          Diziler
          <ul className="series-category">
            <Link to={"/popularseries"} className="popular-movies">
              Popüler
            </Link>
            <Link to={"/bestratedseries"} className="best-rated-movies">
              En Fazla Oy Alanlar
            </Link>
          </ul>
        </li>
       
        <NavLink to={"/actors"}>Kişiler</NavLink>
      </ul>
      <div className="nav-info">
        <p className="nav-country">TR</p>
        <p className="nav-account">E</p>
      </div>
    </nav>
  );
};

export default Navbar;
