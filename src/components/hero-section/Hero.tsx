import fourK from "../../assets/icons/4k.png";
import arrow from "../../assets/icons/arrow.png";
import ball from "../../assets/icons/ball.png";
import game from "../../assets/icons/game.png";
import home from "../../assets/icons/home.png";
import lightPlaylist from "../../assets/icons/light-playlist.png";
import line from "../../assets/icons/line.png";
import play from "../../assets/icons/play.png";
import playlist from "../../assets/icons/playlist.png";
import search from "../../assets/icons/search.png";
import star from "../../assets/icons/star.png";
import tv from "../../assets/icons/tv.png";
import video from "../../assets/icons/video.png";
import watch from "../../assets/icons/watch.png";
import heroImage from "../../assets/images/hero-image.png";
import NavBar from "../nab-bar/NavBar";
import "./hero.css";

const Hero = () => {
  return (
    <header>
      <NavBar />
      <div id="greadient-bg" />
      <div id="content-container">
        {/* ======================= Left side of the hero section ======================== */}
        <div id="left">
          <img src={line} alt="" id="line" />

          <div id="numbers">
            <span id="active">01</span>
            <span id="inactive">/05</span>
          </div>

          <div id="scroll">
            <span>Scroll down</span>
            <img src={arrow} alt="" />
          </div>
        </div>

        {/* ========================= Hero image container ============================ */}
        <div id="image-container">
          <img src={heroImage} alt="Holaa banner" />
        </div>

        {/* ======================== Hero content container =========================== */}
        <div id="content">
          <h1 id="hero-title">
            The Lord <br /> of The Rings
          </h1>
          <div id="hero-info">
            <div>
              <img src={star} alt="" />
              <span>4.9 Reviews</span>
            </div>
            <div>
              <img src={watch} alt="" />
              <span>02h 30m</span>
            </div>
            <div>
              <img src={fourK} alt="" />
              <span>4k Quality</span>
            </div>
          </div>

          <p id="hero-para">
            The Lord of the Rings is a trilogy of epic fantasy adventure films
            directed.
          </p>

          <div id="hero-btns">
            <button id="play-btn" className="primary-btn">
              <img src={play} alt="" />
              <span>PLAY TRAILER</span>
            </button>
            <button id="playlist-btn" className="primary-btn">
              <img src={playlist} alt="" />
              <span>ADD TO LIST</span>
            </button>
          </div>
        </div>

        {/* ======================== Right side content ============================= */}
        <div id="right">
          <div id="route-btns">
            <button id="home-route-btn">
              <div>
                <span>GO TO HOME</span>
                <img src={home} alt="" />
              </div>
            </button>
            <button id="search-route-btn">
              <div>
                <span>LET&apos;S SEARCH</span>
                <img src={search} alt="" />
              </div>
            </button>
            <button id="video-route-btn">
              <div>
                <span>WATCH VIDEO</span>
                <img src={video} alt="" />
              </div>
            </button>
            <button id="playlist-route-btn">
              <div>
                <span>GO TO PLAYLIST</span>
                <img src={lightPlaylist} alt="" />
              </div>
            </button>
            <button id="tv-route-btn">
              <div>
                <span>WATCH TV</span>
                <img src={tv} alt="" />
              </div>
            </button>
            <button id="game-route-btn">
              <div>
                <span>PLAY GAMES</span>
                <img src={game} alt="" />
              </div>
            </button>
            <button id="ball-route-btn">
              <div>
                <span>WATCH SPORTS</span>
                <img src={ball} alt="" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
