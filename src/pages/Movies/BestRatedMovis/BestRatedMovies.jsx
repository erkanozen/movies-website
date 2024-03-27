import { useEffect, useState } from "react";
import "./BestRatedMovies.css";
import axios from "axios";
import BestRatedMoviesList from "./BestRatedMoviesList";
import Loading from "../../../components/Loading/Loading";

const BestRatedMovies = () => {
  const [bestMovies, setBestMovies] = useState([]);
  const [loading, setLoading] = useState(true)
    useState(true) |
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
            "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
            options
          );

          setBestMovies(response.data.results);
          setLoading(false);
        } catch (error) {
          console.error(error);
          setLoading(false);
        }
      }

      getUser();
    }, []);

  return (
    <div className="best-movies-container">
      <h3>En Fazla Oy Alan Filmler</h3>
      {loading ? (
        <Loading />
      ) : (
        <div className="best-movies">
          {bestMovies.map((item) => (
            <BestRatedMoviesList key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BestRatedMovies;
