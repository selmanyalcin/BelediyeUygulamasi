import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "../Styles/Components.css";
import { ref, getBytes, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../Functions/FirebaseConfig";
import { getprofilePhoto } from "../Functions/StorageFunctions";

export default function Header() {
  const [ımageLink, setımageLink] = useState();

  useEffect(() => {});

  return (
    <div className="Header">
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <div className="MenuButton">
          <i class="fa-solid fa-bars fa-xl"></i>
        </div>
        <div className="HeaderName">
          <Link className="Link" to="/">
            <h2>RisArt</h2>
          </Link>
        </div>
      </div>

      <div className="SearchBar">
        <i class="fa-solid fa-magnifying-glass"></i>
        <p>Search Something...</p>
      </div>
      <div className="HeaderNavs">
        <Link style={{ marginRight: "5%" }} to="/CreatePage">
          <button className="HeaderButton">Create</button>
        </Link>

        <Link style={{ marginRight: "5%" }} to="/Profile">
          <img
            className="HeaderPP"
            src={localStorage.getItem("ProfilePhotoLink")}
          />
        </Link>
      </div>
    </div>
  );
}
