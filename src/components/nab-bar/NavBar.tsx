import bar from "../../assets/icons/bar.png";
import premium from "../../assets/icons/premium.png";
import profile from "../../assets/icons/profile.png";
import logo from "./../../assets/icons/logo.png";
import "./navbar.css";

const NavBar = () => {
  return (
    <nav>
      <div id="left-content">
        <img src={logo} alt="Holaa logo" id="logo" />

        <button id="bar-btn">
          <img src={bar} alt="" />
        </button>
      </div>

      <div id="right-content">
        <button id="subscribe-btn" className="primary-btn">
          <img src={premium} alt="" />
          SUBSCRIBE
        </button>

        <button id="profile-btn" className="icon-btn">
          <img src={profile} alt="" />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
