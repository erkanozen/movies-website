import "./ActorsList.css";

const ActorsList = ({ item }) => {
  return (
    <div className="actors-list-container">
      {item.profile_path ? <img
        className="actors-list-image"
        src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
        alt=""
      /> : <div className="error-image"></div> }
      
      <h3 className="actors-list-title">{item.name}</h3>
      <div className="actors-list-head">
        <h5>Movies :</h5>
        <p className="actors-list-info">{item.known_for[0]?.title}</p>
        <p className="actors-list-info">{item.known_for[1]?.title}</p>
        <p className="actors-list-info">{item.known_for[2]?.title}</p>
      </div>
    </div>
  );
};

export default ActorsList;
