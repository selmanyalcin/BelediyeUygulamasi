import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ref, getBytes, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../Functions/FirebaseConfig";
import ProfilePhoto from "../Images/ProfilePhoto.jpg";

export default function Post(props) {
  const [ımageLink, setımageLink] = useState();
  const [creatorPhoto, setcreatorPhoto] = useState(ProfilePhoto);
  const navigate = useNavigate();
  const [moderator, setModerator] = useState();
  useEffect(() => {
    console.log(props.moderator);
    console.log(props.name);
    const ImageRef = ref(storage, "PostImages/" + props.id);
    const CreatorRef = ref(storage, "ProfilePhotos/" + props.creator);
    getDownloadURL(ImageRef).then((response) => {
      setımageLink(response);
    });

    getDownloadURL(CreatorRef).then((response) => {
      setcreatorPhoto(response);
    });
  }, []);

  const navigatePostPage = () => {
    navigate("/PostPage", {
      state: {
        postImage: ımageLink,
        postName: props.name,
        likeCount: props.likeCount,
        commentCount: props.commentCount,
        id: props.id,
        creator: props.creator,
        creatorPhoto: creatorPhoto,
        communityName: props.communityName,
      },
    });
  };

  return (
    <div className="PostMain">
      <button onClick={navigatePostPage} className="Link">
        <div className="PriceTag"></div>
        <div style={{ display: props.moderator }} className="BlockRemove">
          <i
            style={{ marginLeft: "1%", color: "gray", marginRight: "1%" }}
            class="fa-solid fa-trash fa-2xl"
          ></i>
          <i
            style={{ marginLeft: "1%", color: "gray", marginRight: "1%" }}
            class="fa-solid fa-ban fa-2xl"
          ></i>
        </div>
        <div className="PostImageArea">
          <img className="PostImage" src={ımageLink} />
        </div>
        <div className="PostInfoArea">
          <div>
            <h2>{props.name}</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div className="NameSection">
              <img className="PostPP" src={creatorPhoto} />

              <h4>{props.creator}</h4>
            </div>
            <div className="MetricsSection">
              <h4>{props.likeCount}</h4>
              <i
                style={{ marginLeft: "5%", color: "gray", marginRight: "5%" }}
                class="fa-solid fa-heart fa-xl"
              ></i>
              <h4>{props.commentCount}</h4>
              <i
                style={{ marginLeft: "5%", color: "gray", marginRight: "5%" }}
                class="fa-solid fa-comment fa-xl"
              ></i>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}
