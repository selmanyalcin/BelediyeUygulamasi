import Header from "../Components/Header";
import { Outlet, Link } from "react-router-dom";
import NavMenu from "../Components/NavMenu";
import "../Styles/Create.css";
import { useState } from "react";
import { storage } from "../Functions/FirebaseConfig";
import { ref, uploadBytes } from "firebase/storage";
import { uploadPost } from "../Functions/DBfunctionsj";
import { createPremiumWork } from "../Functions/DBfunctionsj";

export default function Create() {
  const [ımageUpload, setımageUpload] = useState(null);
  const createPost = () => {
    const id = String(parseInt(Math.random() * 1000000));
    console.log("idiniz", id);
    const name = String(document.getElementById("PostName").value);
    const description = String(
      document.getElementById("PostDescription").value
    );
    const tags = String(document.getElementById("PostTags").value);

    const creator = localStorage.getItem("UserMail");
    if (name.length > 0 && name.length <= 15 && name.length <= 15) {
      console.log("test");
      if (ımageUpload == null) return alert("you have to select a image");
      const ımageRef = ref(storage, "PostImages/" + id);
      uploadBytes(ımageRef, ımageUpload).then(() => {
        console.log("Done");
        createPremiumWork(name, description, tags, creator, id);
      });
    } else {
      alert(
        "You have to select a post name and a community also your post name can'be longer than 15 characters"
      );
    }
  };

  return (
    <div className="MainField">
      <Header />
      <div className="BottomMain">
        <NavMenu />
        <div className="ContentArea">
          <div className="CreateArea">
            <h2>*Select a File</h2>
            <label for="avatar">Choose a profile picture:</label>

            <input
              type="file"
              onChange={(event) => {
                setımageUpload(event.target.files[0]);
              }}
            ></input>
            <h2>*Name</h2>
            <input id="PostName" placeholder="Type a post a name..." />
            <h2>Description</h2>
            <input
              id="PostDescription"
              placeholder="Type a post description..."
            />
            <h2>Tags</h2>
            <input id="PostTags" placeholder="Post Tags..." />
            <div className="ButtonDivPostCreate">
              <button onClick={createPost} className="HeaderButton">
                Publish
              </button>
              <button style={{ marginLeft: "1%" }} className="HeaderButton">
                Mint & Publish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
