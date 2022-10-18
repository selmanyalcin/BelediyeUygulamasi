import Header from "../../Components/Header";
import "../../Styles/Profile.css";
import Post from "../../Components/Post";
import { Outlet, Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className="MainField">
      <Header />
      <div className="CommunityInfo">
        <div className="CommunityInfo1">
          <img
            className="PostPP"
            src="data:image/png;base64,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"
          />
          <h2>Marvel</h2>
        </div>
        <div className="CommunityInfo2">
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
          <button className="HeaderButton">Bağış</button>
          <Link to="/MarvelSubs" className="BottomNavBarLink">
            <button className="HeaderButton">Subscription</button>
          </Link>
          <button className="HeaderButton">NFT Project</button>
        </div>
      </div>

      <div className="TopBarJobs">
        <h2>Premium Works</h2>
        <button className="HeaderButton">Subscribe</button>
      </div>
      <div className="ProfileContent">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
