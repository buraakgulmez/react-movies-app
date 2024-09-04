import { useState, useEffect } from "react";
import apiData from "../../api.json";
import "./film-list-components-styles.css";

const MovieList = ({ filteredMovies }) => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    setMovieData(apiData.movies);
  }, []);

  const moviesToDisplay = filteredMovies.length > 0 ? filteredMovies : movieData;

  return (
    <div className="movie-list-container">
      <div className="movie-list-main">
        {moviesToDisplay.map((movie) => (
          <div key={movie.id} className="movie-list">
            <div className="movie-inner">
              <div className="movie-front">
                <img src={movie.img} alt={movie.title} />
              </div>
              <div className="movie-back">
                <div className="movie-info">
                  <p className="movie-name">{movie.title}</p>
                  <p className="movie-directed">{movie.year} - {movie.directed}</p>
                  <p className="movie-description">{movie.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
