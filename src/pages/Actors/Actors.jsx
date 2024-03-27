import { useEffect, useState } from "react";
import "./Actors.css";
import axios from "axios";
import ActorsList from "./ActorsList";
import Loading from "../../components/Loading/Loading";

const Actors = () => {
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: import.meta.env.VITE_API_TOKEN
      }
    };

    async function getUser() {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/trending/person/day?language=en-US', options);
        setActors(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }

    getUser();
  }, []);
  return (
    <div className="actors-container">
      <h3>Popüler Filmler</h3>
      {loading ? (
        <Loading />
      ) : (
        <div className="actors-series">
          {actors.map((item) => (
            <ActorsList key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Actors;
