import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { ref, getBytes, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../Functions/FirebaseConfig";
import { useNavigate } from "react-router-dom";

export default function Community(props) {
  const [ımageLink, setımageLink] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    console.log(props.name);
    const ImageRef = ref(storage, "CommunityPPs/" + props.name);
    getDownloadURL(ImageRef).then((response) => {
      console.log(response);
      setımageLink(response);
    });
  }, []);

  const navigateCommunityPage = () => {
    console.log("Clicked", props.name);
    navigate("/CommunityPage", {
      state: { communityPP: ımageLink, communityName: props.name },
    });
  };

  return (
    <div className="CommunityDiv">
      <button onClick={navigateCommunityPage} className="CommunityLink">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "70%",
          }}
        >
          <img className="CommunityPP" src={ımageLink} />
          <h3>{props.name}</h3>
        </div>

        <button className="HeaderButton">Join</button>
      </button>
    </div>
  );
}
