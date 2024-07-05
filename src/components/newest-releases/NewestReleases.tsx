import play from "../../assets/icons/fill-play.png";
import star from "../../assets/icons/fill-star.png";
import leftArrow from "../../assets/icons/left-arrow.png";
import live from "../../assets/icons/live.png";
import heart from "../../assets/icons/love.png";
import rightArrow from "../../assets/icons/right-arrow.png";
import fourK from "../../assets/icons/round-4k.png";
import clock from "../../assets/icons/time-circle.png";
import union from "../../assets/icons/union.png";
import upload from "../../assets/icons/upload.png";
import playlist from "../../assets/icons/white-playlist.png";
import { newestMovies } from "../../data.config";
import { MovieType } from "../movies/Movies";
import "./newest.css";

const NewestReleases = () => {
  return (
    <section id="newest-movies">
      {/* header */}
      <div id="section-header">
        <h2>
          Newest releases <img src={union} alt="" />
        </h2>
        <div id="btns">
          <button id="left-arrow-btn">
            <span>
              <img src={leftArrow} alt="" />
            </span>
          </button>
          <button id="right-arrow-btn">
            <span>
              <img src={rightArrow} alt="" />
            </span>
          </button>
        </div>
      </div>

      <div id="movies-container">
        {newestMovies.map((movie: MovieType) => (
          <div className="latest-movie-card">
            <img src={movie.poster} alt={movie.name} className="movie-poster" />
            <div className="card-content">
              <div className="event-btns">
                <button className="play-btn">
                  <img src={play} alt="" className="" />
                </button>
                <div>
                  <button className="icon-btn playlist-btn">
                    <img src={playlist} alt="" />
                  </button>
                  <button className="icon-btn live-btn">
                    <img src={live} alt="" />
                  </button>
                  <button className="icon-btn heart-btn">
                    <img src={heart} alt="" />
                  </button>
                  <button className="icon-btn upload-btn">
                    <img src={upload} alt="" />
                  </button>
                </div>
              </div>
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewestReleases;
