import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Actors from "./pages/Actors/Actors";
import PopularMovies from "./pages/Movies/PopularMovies/PopularMovies";
import BestRatedMovies from "./pages/Movies/BestRatedMovis/BestRatedMovies";
import PopularSeries from "./pages/Series/PopularSeries/PopularSeries";
import BestRatedSeries from "./pages/Series/BestRatedSeries/BestRatedSeries";
import Footer from "./components/Footer/Footer";
import MoviesDetail from "./pages/MoviesDetail/MoviesDetail";
import SeriesDetail from "./pages/SeriesDetail/SeriesDetail";
import Search from "./pages/Search/Search";
import ErrorPages from "./pages/ErrorPages/ErrorPages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/popularmovies" element={<PopularMovies />} />
        <Route path="/bestratedmovies" element={<BestRatedMovies />} />
        <Route path="/popularseries" element={<PopularSeries />} />
        <Route path="/bestratedseries" element={<BestRatedSeries />} />
        <Route path="/MoviesDetail" element={<MoviesDetail />} />
        <Route path="/SeriesDetail" element={<SeriesDetail />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/actors" element={<Actors />} />
        <Route path="*" element={<ErrorPages />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

