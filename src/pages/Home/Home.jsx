import { useState } from "react";
import TrendMovies from "../../components/TrendMovies/TrendMovies";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [query, SetQuery] = useState("");
  const navigate = useNavigate();
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      navigate("/Search", { state: { query: query } });
      window.scrollTo(0, 0);
    }
  };
  return (
    <>
      <div className="home-container">
        <h2 className="home-title">Hoşgeldiniz</h2>
        <p className="home-info">
          Milyonlarca film, TV şovu ve keşfedilecek kişi. Şimdi keşfedin.
        </p>
        <form onSubmit={handleSearchSubmit} className="search-form">
          <input
            onChange={(e) => SetQuery(e.target.value)}
            className="search-input"
            type="text"
            value={query}
            placeholder="Film veya Dizi İsmi Giriniz"
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>
      <TrendMovies />
    </>
  );
};

export default Home;
