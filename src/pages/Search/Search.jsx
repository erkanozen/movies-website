import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SearchList from "./SearchList";
import "./Search.css";
import Loading from "../../components/Loading/Loading";

const Search = () => {
  const searchLocation = useLocation();
  const [searchList, setSearchList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (searchLocation.state && searchLocation.state.query) {
          const searchInputValue = searchLocation.state.query;
          const options = {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization: import.meta.env.VITE_API_TOKEN,
            },
          };
          const response = await axios.get(
            `https://api.themoviedb.org/3/search/multi?query=${searchInputValue}&include_adult=false&language=en-US&page=1`,
            options
          );
          setSearchList(response.data.results);
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [searchLocation.state]);

  return (
    <div className="search-container">
      <h2 className="search-title">Arama Sonucu</h2>
      <Link to={"/"} className="search-navigate">
        Anasayfaya Dön
      </Link>
      {loading ? (
        <Loading />
      ) : (
        <div className="search">
          {searchList.length === 0 ? (
            <div className="empty-container">
              <p className="empty-search">Aradığınız Sayfa Bulunamadı !!!</p>
              <p>Lütfen Geçerli Bir Film veya Dizi İsmi Giriniz !!!</p>
            </div>
          ) : (
            searchList.map((item) => <SearchList key={item.id} item={item} />)
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
