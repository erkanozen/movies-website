import { IoPlayCircleOutline } from "react-icons/io5";
import "./SeriesDetail.css";
import { MdAddComment } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const SeriesDetail = () => {
  const location = useLocation();
  const dizi = location.state.dizi;
  const date = dizi.first_air_date.toString().substring(0,4)
  const imdbRating = dizi.vote_average.toString().substring(0,3)
  return (
    <div
      className="series-detail-container"
      style={{
        backgroundImage: `linear-gradient(rgba(33, 13, 11, 0.7), rgba(243, 220, 179, 1)), url(https://image.tmdb.org/t/p/w1280/${dizi.backdrop_path})`,
      }}
    >
      <div className="series-detail-image-container">
        <img
          className="series-detail-image"
          src={`https://image.tmdb.org/t/p/w1280/${dizi.poster_path}`}
          alt=""
        />
        <IoPlayCircleOutline className="icon-play" />
      </div>
      <div className="series-detail-info-container">
        <div className="series-detail-title-head">
          <h3 className="series-detail-title">{dizi.name}</h3>
          <p className="series-detail-date">({date})</p>
        </div>
        <div className="series-detail-imdb-container">
          <p className="series-detail-fulldate">{`${dizi.first_air_date} (TR) `}</p>
          <p className="series-detail-imdb">{`IMDB : ${imdbRating}`}</p>
        </div>

        <div className="series-detail-icons">
          <MdAddComment className="icon-add" />
          <FaRegHeart className="icon-heart" />
        </div>
        <div className="series-detail-info-head">
          <p className="series-detail-info-head-title">Özet :</p>
          <p className="series-detail-info">{dizi.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default SeriesDetail;
