import { useEffect, useState } from "react";
import "./PopularSeries.css";
import axios from "axios";
import PopularSeriesList from "./PopularSeriesList";
import Loading from "../../../components/Loading/Loading";

const PopularSeries = () => {
  const [popularSeries, setPopularSeries] = useState([]);
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
          "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
          options
        );
        setPopularSeries(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }

    getUser();
  }, []);

  return (
    <div className="popular-series-container">
      <h3>Popüler Diziler</h3>
      {loading ? (
        <Loading />
      ) : (
        <div className="populer-series">
          {popularSeries.map((item) => (
            <PopularSeriesList key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PopularSeries;
