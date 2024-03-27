import { useLocation } from "react-router-dom";
import "./MoviesDetail.css";
import { FaRegHeart } from "react-icons/fa";
import { MdAddComment } from "react-icons/md";
import { IoPlayCircleOutline } from "react-icons/io5";
const MoviesDetail = () => {
  const location = useLocation();
  const film = location.state.film;
  const date = film.release_date.toString().substring(0, 4);
  const imdbRating = film.vote_average.toString().substring(0, 3);
  return (
    <div
      className="movies-detail-container"
      style={{
        backgroundImage: `linear-gradient(rgba(33, 13, 11, 0.7), rgba(33, 13, 11, 0.7)), url(https://image.tmdb.org/t/p/w1280/${film.backdrop_path})`,
      }}
    >
      <div className="movies-detail-image-container">
        <img
          className="movies-detail-image"
          src={`https://image.tmdb.org/t/p/w1280/${film.poster_path}`}
          alt=""
        />
        <IoPlayCircleOutline className="icon-play" />
      </div>
      <div className="movies-detail-info-container">
        <div className="movies-detail-title-head">
          <h3 className="movies-detail-title">{film.title}</h3>
          <p className="movies-detail-date">({date})</p>
        </div>
        <div className="movies-detail-imdb-container">
          <p className="movies-detail-fulldate">{`${film.release_date} (TR) `}</p>
          <p className="moveis-detail-imdb">{`IMDB : ${imdbRating}`}</p>
        </div>

        <div className="movies-detail-icons">
          <MdAddComment className="icon-add" />
          <FaRegHeart className="icon-heart" />
        </div>
        <div className="movies-detail-info-head">
          <p className="movies-detail-info-head-title">Özet :</p>
          <p className="movies-detail-info">{film.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MoviesDetail;
