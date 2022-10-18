import Header from "../Components/Header";
import "../Styles/Main.css";
import { Outlet, Link } from "react-router-dom";
import Post from "../Components/Post";
import NavMenu from "../Components/NavMenu";
import { useEffect, useState } from "react";
import Comment from "../Components/Comment";
import LoginSign from "../Components/LoginSignup";
import { database } from "../Functions/FirebaseConfig";
import { ref, set, get, update, remove, child } from "firebase/database";
import { getprofilePhoto } from "../Functions/StorageFunctions";
const dbref = ref(database);

export default function Main() {
  const [log, Setlog] = useState(false);
  const [renderArray, setrenderArray] = useState([0]);
  const [communityLists, setcommunityLists] = useState([]);
  const [nameArray, SetnameArray] = useState([]);
  let array = [];

  useEffect(() => {
    getprofilePhoto();
    get(child(dbref, "Posts/")).then((snapshot) => {
      const communities = snapshot.val();
      const communityList = [];
      for (let id in communities) {
        communityList.push(communities[id]);
        SetnameArray(communityList);
      }
      console.log("list of communites", communityList);
      setcommunityLists(communityList);
      console.log("list of communites by state", nameArray);
    });
  }, []);

  return (
    <div className="MainField">
      {renderArray.map((value, index) => {
        const a = localStorage.getItem("Logged");
        console.log(a);
        if (a == "true") {
          return <Header />;
        }
      })}

      <div className="BottomMain">
        {renderArray.map((value, index) => {
          const a = localStorage.getItem("Logged");
          console.log(a);
          if (a == "true") {
            return <NavMenu />;
          }
        })}

        {renderArray.map((value, index) => {
          const a = localStorage.getItem("Logged");
          console.log(a);
          if (a == "false" || a == null) {
            return <LoginSign />;
          }
          if (a == "true") {
            return (
              <div className="ContentArea">
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
            );
          }
        })}
      </div>
    </div>
  );
}
