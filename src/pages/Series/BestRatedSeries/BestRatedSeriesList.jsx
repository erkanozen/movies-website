import { useNavigate } from "react-router-dom";
import "./BestRatedSeriesList.css";
import { FaHeart } from "react-icons/fa";
import { FiEye } from "react-icons/fi";

const BestRatedSeriesList = ({ item }) => {
  const imdbRating = item.vote_average.toString().substring(0, 3);
  const navigate = useNavigate();
  const handleSeriesClick = () => {
    navigate(`/SeriesDetail`, { state: { dizi: item } });
    window.scrollTo(0, 0);
  };
  return (
    <div onClick={handleSeriesClick} className="best-series-list-container">
      <img
        className="best-series-list-image"
        src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
        alt=""
      />
      <h3 className="best-series-list-title">{item.name}</h3>
      <div className="best-series-list-head">
        <p className="best-series-list-info">{item.first_air_date}</p>
        <p className="best-series-list-imdb">IMDB : {imdbRating}</p>
      </div>
      <div className="trend-movie-icons-container">
      <FaHeart className="trend-movie-icon-heart" />
      <FiEye className="trend-movie-icon-eyes" />
    </div>
    </div>
  );
};

export default BestRatedSeriesList;
