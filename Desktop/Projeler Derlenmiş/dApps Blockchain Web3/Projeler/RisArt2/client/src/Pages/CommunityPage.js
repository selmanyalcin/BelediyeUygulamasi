import Header from "../Components/Header";
import Post from "../Components/Post";
import { Outlet, Link } from "react-router-dom";
import "../Styles/CommunityPage.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { database } from "../Functions/FirebaseConfig";
import { ref, set, get, update, remove, child } from "firebase/database";
const dbref = ref(database);

export default function CommunityPage() {
  const { state } = useLocation();
  const [log, Setlog] = useState(false);
  const [renderArray, setrenderArray] = useState([0]);
  const [communityLists, setcommunityLists] = useState([]);
  const [nameArray, SetnameArray] = useState([]);
  const [moderator, setModerator] = useState("none");
  let array = [];

  useEffect(() => {
    get(child(dbref, "Community/" + state.communityName + "/Posts/")).then(
      (snapshot) => {
        console.log(snapshot.val());
        const communities = snapshot.val();
        const communityList = [];
        for (let id in communities) {
          communityList.push(communities[id]);
          SetnameArray(communityList);
        }
        console.log("list of communites", communityList);
        setcommunityLists(communityList);
        console.log("list of communites by state", nameArray);
      }
    );
    get(child(dbref, "Community/" + state.communityName)).then((snapshot) => {
      console.log(snapshot.val().creator, localStorage.getItem("UserMail"));
      if (snapshot.val().creator == localStorage.getItem("UserMail")) {
        setModerator("flex");
        console.log(moderator);
      }
    });
  }, []);
  return (
    <div>
      <Header />
      <div className="Community">
        <div className="CommunityInfo">
          <div className="CommunityInfo1">
            <img className="PostPP" src={state.communityPP} />
            <h2>{state.communityName}</h2>
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
          </div>
        </div>
        <div className="CommunityMain">
          {communityLists.map((value, index) => {
            return (
              <Post
                name={value.name}
                creator={value.creator}
                likeCount={value.likeCount}
                commentCount={value.commentCount}
                id={value.id}
                communityName={value.communityName}
                moderator={moderator}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
