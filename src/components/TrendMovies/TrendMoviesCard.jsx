import "./TrendMoviesCard.css";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { FiEye } from "react-icons/fi";

const TrendMoviesCard = ({ item }) => {
  const imdbRating = item.vote_average.toString().substring(0, 3);
  const navigate = useNavigate();
  const handleMovieClick = () => {
    navigate(`/MoviesDetail`, { state: { film: item } });
    window.scrollTo(0, 0);
  };
  return (
    <div onClick={handleMovieClick} className="trend-container">
      <img
        className="trend-movie-image"
        src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
        alt=""
      />
      <h3 className="trend-movie-title">{item.title}</h3>
      <div className="trend-movie-info-head">
        <p className="trend-movie-info">{item.release_date}</p>
        <p className="trend-movie-imdb">IMDB : {imdbRating}</p>
      </div>
      <div className="trend-movie-icons-container">
      <FaHeart className="trend-movie-icon-heart" />
      <FiEye className="trend-movie-icon-eyes" />
    </div>
    </div>
  );
};

export default TrendMoviesCard;
