import Header from "../../Components/Header";
import Post from "../../Components/Post";
import { Outlet, Link } from "react-router-dom";

export default function CommunityPage() {
  return (
    <div>
      <Header />
      <div className="Community">
        <div className="CommunityInfo">
          <div className="CommunityInfo1">
            <img
              className="PostPP"
              src="https://upload.wikimedia.org/wikipedia/tr/8/86/Fenerbah%C3%A7e_SK.png"
            />
            <h2>Fenerbahçe</h2>
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
            <Link to="/FenerbahçeSubs" className="BottomNavBarLink">
              <button className="HeaderButton">Subscription</button>
            </Link>
            <button className="HeaderButton">NFT Project</button>
          </div>
        </div>
        <div className="CommunityMain">
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
    </div>
  );
}
