import axios from "axios";
import "./TrendMovies.css";
import TrendMoviesCard from "./TrendMoviesCard";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "../Loading/Loading";

const TrendMovies = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: import.meta.env.VITE_API_TOKEN,
      },
    };
    const getUser = async function getUser() {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
          options
        );
        const firts18Results = response.data.results.slice(0, 18);
        setTrendMovies(firts18Results);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    getUser();
  }, []);

  return (
    <div className="trend-movies-container">
      <h3 className="trend-title">Trend</h3>
      {loading ? (
        <Loading />
      ) : (
        <div className="trend-movies-card-container">
          {trendMovies.map((item) => (
            <TrendMoviesCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TrendMovies;
