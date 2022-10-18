import Header from "../Components/Header";
import { Outlet, Link } from "react-router-dom";
import NavMenu from "../Components/NavMenu";
import "../Styles/Create.css";
import { useState } from "react";
import { storage } from "../Functions/FirebaseConfig";
import { ref, uploadBytes } from "firebase/storage";
import { uploadCommunityDetails } from "../Functions/DBfunctionsj";
import { getComunityId } from "../Functions/DBfunctionsj";

export default function Create() {
  const [ımageUpload, setımageUpload] = useState(null);

  const CreateCommunity = () => {
    const id = String(parseInt(Math.random() * 1000000));
    console.log("idiniz", id);
    const name = String(document.getElementById("NameArea").value);
    const TW = String(document.getElementById("TWarea").value);
    const IG = String(document.getElementById("IGarea").value);
    const DC = String(document.getElementById("DCarea").value);
    const URL = String(document.getElementById("Urlarea").value);
    const creator = localStorage.getItem("UserMail");
    console.log(name, TW, IG, DC, URL);
    if (name.length > 0 && name.length <= 15) {
      console.log("test");
      if (ımageUpload == null) return alert("You have to select a image.");
      const ımageRef = ref(storage, "CommunityPPs/" + name);
      uploadBytes(ımageRef, ımageUpload).then(() => {
        console.log("Done");
        uploadCommunityDetails(name, TW, IG, DC, URL, creator, name);
      });
    } else {
      alert("You have to select a community name.(Max. 15 Character lenght)");
    }
  };

  return (
    <div className="MainField">
      <Header />
      <div className="BottomMain">
        <NavMenu />
        <div className="ContentArea">
          <div className="CreateArea">
            <h2>*Community Logo</h2>
            <label for="avatar">Choose a profile picture:</label>

            <input
              type="file"
              onChange={(event) => {
                setımageUpload(event.target.files[0]);
              }}
            ></input>

            <h2>*Community Name</h2>
            <input id="NameArea" placeholder="Type your Community name..." />
            <h2>Twitter Account</h2>
            <input id="TWarea" placeholder="Type your twitter link..." />
            <h2>Instagram Account</h2>
            <input id="IGarea" placeholder="Type your instagram link..." />
            <h2>Discord Link</h2>
            <input id="DCarea" placeholder="Type your discord link..." />
            <h2>Website</h2>
            <input id="Urlarea" placeholder="Type your website link..." />
            <div className="ButtonDivPostCreate">
              <button onClick={CreateCommunity} className="HeaderButton">
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
