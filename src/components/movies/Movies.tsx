import { movies } from "../../app.config";
import star from "../../assets/icons/fill-star.png";
import fourK from "../../assets/icons/round-4k.png";
import clock from "../../assets/icons/time-circle.png";
import "./movies.css";

export interface MovieType {
  poster: string;
  name: string;
  ratings: number;
  duration: string;
  quality: string;
  types: string[];
}
const Movies = () => {
  return (
    <section id="movies-section">
      <div id="movies-container">
        {movies.map((movie: MovieType) => (
          <div className="movie-card">
            <img src={movie.poster} alt={movie.name} className="movie-poster" />
            <div>
              <h3 className="movie-name">{movie.name}</h3>
              <div className="movie-info">
                <span>
                  <img src={star} alt="" />
                  {movie.ratings}
                </span>
                <span>
                  <img src={clock} alt="" />
                  {movie.duration}
                </span>
                <span>
                  <img src={fourK} alt="" />
                  {movie.quality}
                </span>
              </div>
              <div className="movie-types">
                <span>{`${movie.types[0]}, ${movie.types[1]}`}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Movies;
