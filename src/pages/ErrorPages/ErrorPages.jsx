import { Link } from "react-router-dom"
import "./ErrorPages.css"

const ErrorPages = () => {
  return (
    <div className='error-pages-container'>
        <h2 className="error-title">Böyle Bir Sayfa Bulunamadı !!!</h2>
        <Link className="error-navigate " to={"/"}>Ana Sayfaya Dön</Link>
        <Link className="error-navigate " to={"/PopularMovies"}>Popüler Filmler</Link>
        <Link className="error-navigate " to={"/BestRatedMovies"}>En Fazla Oy Alan Filmler</Link>
        <Link className="error-navigate " to={"/PopularSeries"}>Popüler Diziler</Link>
        <Link className="error-navigate " to={"/BestRatedSeries"}>En Fazla Oy Alan Diziler</Link>
        <Link className="error-navigate " to={"/actors"}>Kişiler</Link>
    </div>
  )
}

export default ErrorPages