import "./SearchList.css";

const SearchList = ({ item }) => {
  const searchIMDB = item.vote_average?.toString().substring(0,3)
  return (
    <div className="search-list-container">
      <div className="search-list-image-contaier">
        {item.poster_path ? (
          <img
            className="search-list-image"
            src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
            alt=""
          />
        ) : (
          <div className="empty-img"></div>
        )}
      </div>
      <div className="search-info-container">
        <div className="search-info-head">
          <h1 className="search-list-title">{item.title || item.name}</h1>
          <p className="search-list-date">
            {item.release_date || item.first_air_date}
          </p>
          <p className="search-list-imdb">IMDB : {searchIMDB}</p>
        </div>
        <div>
          <p>Özet :</p>
          <p className="search-list-overview">{item.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default SearchList;
