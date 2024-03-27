import { useNavigate } from "react-router-dom";
import "./BestRatedMoviesList.css";
import { FaHeart } from "react-icons/fa";
import { FiEye } from "react-icons/fi";

const BestRatedMoviesList = ({ item }) => {
  const imdbRating = item.vote_average.toString().substring(0, 3);
  const navigate = useNavigate();
  const handleMovieClick = () => {
    navigate(`/MoviesDetail`, { state: { film: item } });
    window.scrollTo(0, 0);
  };
  return (
    <div onClick={handleMovieClick} className="best-movies-list-container">
      <img
        className="best-movies-list-image"
        src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
        alt=""
      />
      <h3 className="best-movies-list-title">{item.title}</h3>
      <div className="best-movies-list-head">
        <p className="best-movies-list-info">{item.release_date}</p>
        <p className="best-movies-list-imdb">IMDB : {imdbRating}</p>
      </div>
      <div className="trend-movie-icons-container">
      <FaHeart className="trend-movie-icon-heart" />
      <FiEye className="trend-movie-icon-eyes" />
    </div>
    </div>
  );
};

export default BestRatedMoviesList;
