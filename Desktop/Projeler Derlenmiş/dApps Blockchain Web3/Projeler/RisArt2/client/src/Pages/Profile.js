import Header from "../Components/Header";
import "../Styles/Profile.css";
import Post from "../Components/Post";
import { Outlet, Link } from "react-router-dom";
import { logOut } from "../Functions/FirebaseConfig";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { database } from "../Functions/FirebaseConfig";
import { async } from "@firebase/util";
import { ref, set, get, update, remove, child } from "firebase/database";
import { getprofilePhoto } from "../Functions/StorageFunctions";

export default function Profile() {
  const navigate = useNavigate();
  const dbref = ref(database);
  const [name, Setname] = useState();
  const [about, Setabout] = useState();
  const [followerCount, SetfollowerCount] = useState();
  const [renderArray, setrenderArray] = useState([0]);
  const [communityLists, setcommunityLists] = useState([]);
  const [nameArray, SetnameArray] = useState([]);

  useEffect(() => {
    getprofilePhoto();
    const UserMail = localStorage.getItem("UserMail");
    console.log(UserMail);
    console.log(localStorage.getItem("ProfilePhotoLink"));
    get(child(dbref, "Users/" + UserMail))
      .then((snapshot) => {
        if (snapshot.exists()) {
          Setname(snapshot.val().name);
          Setabout(snapshot.val().about);
          SetfollowerCount(snapshot.val().FollowerCount);
        }
      })
      .then(() => {
        get(child(dbref, "Users/" + UserMail + "/Posts")).then((snapshot) => {
          const communities = snapshot.val();
          const communityList = [];
          for (let id in communities) {
            communityList.push(communities[id]);
            SetnameArray(communityList);
          }

          setcommunityLists(communityList);
        });
      });
  }, []);

  const LogOut = () => {
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

      <div>
        <h2>Works</h2>
      </div>
      <div className="ProfileContent">
        {communityLists.map((value, index) => {
          return (
            <Post
              name={value.name}
              creator={value.creator}
              likeCount={value.likeCount}
              commentCount={value.commentCount}
              id={value.id}
              communityName={value.communityName}
              moderator={"none"}
            />
          );
        })}
      </div>
    </div>
  );
}
