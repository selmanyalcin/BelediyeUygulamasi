import Header from "../Components/Header";
import "../Styles/Profile.css";
import Post from "../Components/Post";
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { database } from "../Functions/FirebaseConfig";
import { async } from "@firebase/util";
import { ref, set, get, update, remove, child } from "firebase/database";
import { useEffect, useState } from "react";
import { logOut } from "../Functions/FirebaseConfig";
import { getprofilePhoto } from "../Functions/StorageFunctions";

export default function Profile() {
  const navigate = useNavigate();
  const dbref = ref(database);
  const [name, Setname] = useState();
  const [about, Setabout] = useState("asdas");
  const [followerCount, SetfollowerCount] = useState();

  useEffect(() => {
    getprofilePhoto();
    const UserMail = localStorage.getItem("UserMail");
    console.log(UserMail);
    get(child(dbref, "Users/" + UserMail)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        Setname(snapshot.val().name);
        Setabout(snapshot.val().about);
        SetfollowerCount(snapshot.val().FollowerCount);
      }
    });
  }, []);

  const LogOut = () => {
    console.log("LogOut");
    logOut();
    localStorage.setItem("Logged", "false");
    localStorage.setItem("UserMail", "");
    navigate("/");
  };

  return (
    <div className="MainField">
      <Header />
      <div className="BannerTop">
        <div className="ProfileBanner">
          <div className="User">
            <img
              className="HeaderPP"
              src={localStorage.getItem("ProfilePhotoLink")}
            />
            <div className="NameSectionProfile">
              <h2>{name}</h2>
              <p>{followerCount} Followers</p>
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
          </div>
          <div className="ButtonBarProfile">
            <Link to="/EditProfile" className="BottomNavBarLink">
              <button className="HeaderButton">Edit</button>
            </Link>
            <button onClick={LogOut} className="HeaderButton">
              Log Out
            </button>
          </div>
        </div>
      </div>

      <div></div>
      <div className="ProfileContent" style={{ justifyContent: "center" }}>
        <div className="AboutArea">
          <h2>About</h2>
          <h2>{about}</h2>
        </div>
      </div>
    </div>
  );
}
