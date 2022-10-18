import Header from "../Components/Header";
import { Outlet, Link } from "react-router-dom";
import "../Styles/PostPage.css";
import Comment from "../Components/Comment";
import NavMenu from "../Components/NavMenu";
import { useLocation, useNavigate } from "react-router-dom";
import { makeCommment } from "../Functions/DBfunctionsj";
import { useEffect, useState } from "react";
import { database } from "../Functions/FirebaseConfig";
import { ref, set, get, update, remove, child } from "firebase/database";
import { getprofilePhoto } from "../Functions/StorageFunctions";
import { like } from "../Functions/DBfunctionsj";
const dbref = ref(database);

export default function PostPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [renderArray, setrenderArray] = useState([0]);
  const [communityLists, setcommunityLists] = useState([]);
  const [nameArray, SetnameArray] = useState([]);
  const [commentCount, setcommentCount] = useState();
  const [likeCount, setlikeCount] = useState();

  useEffect(() => {
    getprofilePhoto();
    console.log("Community of Post", state.communityName);
    get(child(dbref, "Posts/" + state.id + "/Comments"))
      .then((snapshot) => {
        const communities = snapshot.val();
        const communityList = [];
        for (let id in communities) {
          communityList.push(communities[id]);
          SetnameArray(communityList);
        }
        console.log("list of communites", communityList);
        setcommunityLists(communityList);
        console.log("list of communites by state", nameArray);
      })
      .then(() => {
        get(child(dbref, "Posts/" + state.id)).then((snapshot) => {
          setcommentCount(snapshot.val().commentCount);
          setlikeCount(snapshot.val().likeCount);
        });
      });
  }, []);

  const navigateForeignPage = () => {
    navigate("/ForeignProfile", {
      state: {
        profileName: state.creator,
        creatorPhoto: state.creatorPhoto,
      },
    });
  };

  const comment = () => {
    const UserMail = localStorage.getItem("UserMail");
    const comment = String(document.getElementById("CommentArea").value);
    makeCommment(
      state.id,
      comment,
      UserMail,
      localStorage.getItem("ProfilePhotoLink"),
      state.commentCount,
      state.communityName,
      state.creator
    );
  };

  const likePost = async () => {
    console.log("like", state.id);
    like(
      state.id,
      localStorage.getItem("UserMail"),
      state.creator,
      state.communityName
    );
  };

  return (
    <div className="MainField">
      <Header />
      <div className="BottomMain">
        <NavMenu />
        <div className="PostPageMainDiv">
          <div className="PhotoArea">
            <img className="PostPhoto" src={state.postImage} />
          </div>
          <div className="PostInfoSection">
            <div className="PostTop">
              <div>
                <h2>{state.postName}</h2>
              </div>
              <div className="PostSections">
                <h3>{likeCount}</h3>
                <button onClick={likePost}>
                  <i
                    style={{
                      color: "gray",
                      marginLeft: "2%",
                      marginRight: "2%",
                    }}
                    class="fa-solid fa-heart fa-xl"
                  ></i>
                </button>

                <h3>{commentCount}</h3>
                <i
                  style={{ color: "gray", marginLeft: "2%", marginRight: "2%" }}
                  class="fa-solid fa-comment fa-xl"
                ></i>
                <i
                  style={{ color: "gray", marginLeft: "2%", marginRight: "2%" }}
                  class="fa-solid fa-award fa-xl"
                ></i>
                <i
                  style={{ color: "gray", marginLeft: "2%", marginRight: "2%" }}
                  class="fa-solid fa-share-nodes fa-xl"
                ></i>
                <button className="HeaderButton">Copyrights</button>
              </div>
            </div>
            <div className="PostBottom">
              <button onClick={navigateForeignPage}>
                <img className="HeaderPP" src={state.creatorPhoto} />
              </button>

              <h3>{state.creator}</h3>
            </div>
          </div>
          <div className="PostCommentSection">
            <h2>Comments</h2>
            <div className="CommentBox">
              <img
                className="HeaderPP"
                src={localStorage.getItem("ProfilePhotoLink")}
              />
              <input id="CommentArea" placeholder="Make a Comment..." />
              <button onClick={comment} className="HeaderButton">
                Comment
              </button>
            </div>
            {communityLists.map((value, index) => {
              return (
                <Comment
                  comment={value.comment}
                  creator={value.creator}
                  creatorPhoto={value.creatorPhoto}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
