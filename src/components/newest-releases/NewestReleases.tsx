import leftArrow from "../../assets/icons/left-arrow.png";
import rightArrow from "../../assets/icons/right-arrow.png";
import union from "../../assets/icons/union.png";
import "./newest.css";

const NewestReleases = () => {
  return (
    <section id="newest-movies-section">
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

      <div id="newest-movies-container"></div>
    </section>
  );
};

export default NewestReleases;
