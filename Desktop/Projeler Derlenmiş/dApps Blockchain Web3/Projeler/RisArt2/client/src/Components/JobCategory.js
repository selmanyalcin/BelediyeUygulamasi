import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { ref, getBytes, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../Functions/FirebaseConfig";
import { useNavigate } from "react-router-dom";

export default function Community(props) {
  return (
    <div className="CommunityDiv">
      <button className="CommunityLink">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "70%",
          }}
        >
          <img className="CommunityPP" src={props.PPlink} />
          <h3>{props.name}</h3>
        </div>

        <button className="HeaderButton">Join</button>
      </button>
    </div>
  );
}
