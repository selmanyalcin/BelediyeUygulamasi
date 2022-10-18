import Header from "../Components/Header";
import { Outlet, Link } from "react-router-dom";
import NavMenu from "../Components/NavMenu";
import "../Styles/Create.css";
import { useState } from "react";
import { storage } from "../Functions/FirebaseConfig";
import { ref, uploadBytes } from "firebase/storage";
import { updataProfileData } from "../Functions/DBfunctionsj";

export default function Create() {
  const [file, setFile] = useState("");

  const [ımageUpload, setımageUpload] = useState(null);

  const saveChanges = () => {
    const UserMail = localStorage.getItem("UserMail");
    const name = String(document.getElementById("Name").value);
    const about = String(document.getElementById("About").value);
    const rate = String(document.getElementById("ShareRate").value);
    const TwitterLink = String(document.getElementById("TWlink").value);
    const Ig = String(document.getElementById("Iglink").value);
    const dc = String(document.getElementById("Dclink").value);
    const url = String(document.getElementById("Url").value);
    console.log(name, about, rate, TwitterLink, Ig, dc, url);
    if (name.length > 0 && name.length <= 15) {
      console.log("test");
      if (ımageUpload == null) {
        updataProfileData(
          name,
          UserMail,
          about,
          rate,
          TwitterLink,
          Ig,
          dc,
          url
        );
      } else {
        const ımageRef = ref(storage, "ProfilePhotos/" + UserMail);
        uploadBytes(ımageRef, ımageUpload).then(() => {
          console.log("Done");
          updataProfileData(
            name,
            UserMail,
            about,
            rate,
            TwitterLink,
            Ig,
            dc,
            url
          );
        });
      }
    } else {
      alert("Max. 15 Character lenght");
    }
  };

  return (
    <div className="MainField">
      <Header />
      <div className="BottomMain">
        <NavMenu />
        <div className="ContentArea">
          <div className="CreateArea">
            <h2>*Select a Profile Photo</h2>
            <label for="avatar">Choose a profile picture:</label>

            <input
              type="file"
              onChange={(event) => {
                setımageUpload(event.target.files[0]);
              }}
            ></input>
            <h2>*Name</h2>
            <input id="Name" placeholder="Type a user a name..." />
            <h2>*About</h2>
            <input id="About" placeholder="Type something about yourself..." />
            <h2>NFT Project Share Rate</h2>
            <input
              id="ShareRate"
              placeholder="Type NFT project share rate..."
            />
            <h2>Twitter Link</h2>
            <input id="TWlink" placeholder="Twitter link..." />
            <h2>Instagram Link</h2>
            <input id="Iglink" placeholder="Instagram link.." />
            <h2>Discord Link</h2>
            <input id="Dclink" placeholder="Discord link.." />
            <h2>Website URL</h2>
            <input id="Url" placeholder="Website URL.." />
            <div className="ButtonDivPostCreate">
              <button onClick={saveChanges} className="HeaderButton">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
