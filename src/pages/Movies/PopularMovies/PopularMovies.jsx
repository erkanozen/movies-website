import { useEffect, useState } from "react";
import "./PopularMovies.css";
import PopularMoviesList from "./PopularMoviesList";
import axios from "axios";
import Loading from "../../../components/Loading/Loading";

const PopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
        import.meta.env.VITE_API_TOKEN
      },
    };

    async function getUser() {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
          options
        );
        setPopularMovies(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }

    getUser();
  }, []);

  return (
    <div className="popular-movies-container">
      <h3>Popüler Filmler</h3>
      {loading ? (
        <Loading />
      ) : (
        <div className="populer-movies">
          {popularMovies.map((item) => (
            <PopularMoviesList key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PopularMovies;
