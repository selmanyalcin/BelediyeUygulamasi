import Header from "../Components/Header";
import "../Styles/Profile.css";
import Post from "../Components/Post";
import { Outlet, Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { database } from "../Functions/FirebaseConfig";
import { async } from "@firebase/util";
import { ref, set, get, update, remove, child } from "firebase/database";
import { followAccount } from "../Functions/DBfunctionsj";
import { subscribeAccount } from "../Functions/DBfunctionsj";

export default function Profile() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const dbref = ref(database);
  const [name, Setname] = useState();
  const [about, Setabout] = useState();
  const [followerCount, SetfollowerCount] = useState();
  const [renderArray, setrenderArray] = useState([0]);
  const [communityLists, setcommunityLists] = useState([]);
  const [nameArray, SetnameArray] = useState([]);

  useEffect(() => {
    localStorage.setItem("LookingForeignProfile", state.profileName);
    const UserMail = localStorage.getItem("UserMail");
    get(child(dbref, "Users/" + state.profileName))
      .then((snapshot) => {
        if (snapshot.exists()) {
          Setname(snapshot.val().name);
          Setabout(snapshot.val().about);
          SetfollowerCount(snapshot.val().FollowerCount);
        }
      })
      .then(() => {
        get(child(dbref, "Users/" + state.profileName + "/Posts")).then(
          (snapshot) => {
            const communities = snapshot.val();
            const communityList = [];
            for (let id in communities) {
              communityList.push(communities[id]);
              SetnameArray(communityList);
            }

            setcommunityLists(communityList);
          }
        );
      });
  });

  const navigateForeignMain = () => {
    navigate("/ForeignProfile", {
      state: {
        profileName: state.profileName,
        creatorPhoto: state.creatorPhoto,
      },
    });
  };

  const navigateAbout = () => {
    navigate("/ForeignProfileAbout", {
      state: {
        profileName: state.profileName,
        creatorPhoto: state.creatorPhoto,
      },
    });
  };

  const navigateSubscription = () => {
    navigate("/ForeignProfileSubs", {
      state: {
        profileName: state.profileName,
        creatorPhoto: state.creatorPhoto,
      },
    });
  };

  const Subscribe = () => {
    subscribeAccount(state.profileName, localStorage.getItem("UserMail"));
  };

  const follow = () => {
    console.log("follow account", state.profileName);
    followAccount(state.profileName, localStorage.getItem("UserMail"));
  };

  return (
    <div className="MainField">
      <Header />
      <div className="BannerTop">
        <div className="ProfileBanner">
          <div className="User">
            <img className="HeaderPP" src={state.creatorPhoto} />
            <div className="NameSectionProfile">
              <h2>{state.profileName}</h2>
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
            <button
              onClick={navigateForeignMain}
              style={{
                backgroundColor: "white",
                border: "none",
                fontWeight: "bolder",
              }}
              className="BottomNavBarLink"
            >
              <h2>Posts</h2>
            </button>
            <button
              onClick={navigateAbout}
              style={{
                backgroundColor: "white",
                border: "none",
                fontWeight: "bolder",
              }}
              className="BottomNavBarLink"
            >
              <h2>About</h2>
            </button>
            <button
              onClick={navigateSubscription}
              style={{
                backgroundColor: "white",
                border: "none",
                fontWeight: "bolder",
              }}
              className="BottomNavBarLink"
            >
              <h2>Subscription</h2>
            </button>
          </div>
          <div className="ButtonBarProfile">
            <button
              onClick={follow}
              style={{ marginLeft: "2%" }}
              className="HeaderButton"
            >
              Follow
            </button>
            <button
              onClick={Subscribe}
              style={{ marginLeft: "2%" }}
              className="HeaderButton"
            >
              Subscribe
            </button>
            <Link to="/SendOffer" className="BottomNavBarLink">
              <button style={{ marginLeft: "2%" }} className="HeaderButton">
                Send Offer
              </button>
            </Link>
            <button style={{ marginLeft: "2%" }} className="HeaderButton">
              Donate
            </button>

            <button style={{ marginLeft: "2%" }} className="HeaderButton">
              NFT Project
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
