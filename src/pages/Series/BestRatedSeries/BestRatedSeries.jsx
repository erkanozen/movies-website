import { useEffect } from "react";
import "./BestRatedSeries.css";
import { useState } from "react";
import axios from "axios";
import BestRatedSeriesList from "./BestRatedSeriesList";
import Loading from "../../../components/Loading/Loading";

const BestRatedSeries = () => {
  const [bestRatedSeries, setBestRatedSeries] = useState([]);
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
          "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
          options
        );
        setBestRatedSeries(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }

    getUser();
  }, []);

  return (
    <div className="best-series-container">
      <h3>En Fazla Oy Alan Diziler</h3>
      {loading ? (
        <Loading />
      ) : (
        <div className="best-series">
          {bestRatedSeries.map((item) => (
            <BestRatedSeriesList key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BestRatedSeries;
