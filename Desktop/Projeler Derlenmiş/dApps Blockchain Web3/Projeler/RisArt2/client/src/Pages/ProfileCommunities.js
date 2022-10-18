import Header from "../Components/Header";
import "../Styles/Profile.css";
import Post from "../Components/Post";
import { Outlet, Link } from "react-router-dom";
import Community from "../Components/Community";

export default function Profile() {
  return (
    <div className="MainField">
      <Header />
      <div className="BannerTop">
        <div className="ProfileBanner">
          <div className="User">
            <img
              className="HeaderPP"
              src="https://a.deviantart.net/avatars-big/p/l/plaguebot.jpg?6"
            />
            <div className="NameSectionProfile">
              <h2>Selman Yalçın</h2>
              <p>134 Followers</p>
            </div>
          </div>
          <div className="UserOptions">
            <i
              style={{ color: "#553bb1", marginLeft: "2%" }}
              class="fa-brands fa-twitter fa-2xl"
            ></i>
            <i
              style={{ color: "#553bb1", marginLeft: "2%" }}
              class="fa-brands fa-instagram fa-2xl"
            ></i>
            <i
              style={{ color: "#553bb1", marginLeft: "2%" }}
              class="fa-brands fa-discord fa-2xl"
            ></i>
            <i
              style={{ color: "#553bb1", marginLeft: "2%", marginRight: "2%" }}
              class="fa-solid fa-globe fa-2xl"
            ></i>
          </div>
        </div>
        <div className="NavBar">
          <div className="BottomNavBar">
            <Link to="/Profile" className="BottomNavBarLink">
              <h2>Posts</h2>
            </Link>
            <Link to="/ProfileAbout" className="BottomNavBarLink">
              <h2>About</h2>
            </Link>
            <Link to="/SubscriptionProfile" className="BottomNavBarLink">
              <h2>Subscripton</h2>
            </Link>
            <Link to="/ProfileCommunities" className="BottomNavBarLink">
              <h2>Communities</h2>
            </Link>
          </div>
          <div className="ButtonBarProfile">
            <Link to="/EditProfile" className="BottomNavBarLink">
              <button className="HeaderButton">Edit</button>
            </Link>
            <button className="HeaderButton">Log Out</button>
          </div>
        </div>
      </div>

      <div>
        <h2>Communities</h2>
      </div>
      <div className="ProfileContent">
        <Community />
      </div>
    </div>
  );
}
