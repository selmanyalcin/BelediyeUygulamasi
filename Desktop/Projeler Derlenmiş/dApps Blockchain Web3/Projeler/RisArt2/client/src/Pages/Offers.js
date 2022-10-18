import Header from "../Components/Header";
import { Outlet, Link } from "react-router-dom";
import NavMenu from "../Components/NavMenu";
import Offer from "../Components/Offer";
import { useEffect, useState } from "react";
import { database } from "../Functions/FirebaseConfig";
import { async } from "@firebase/util";
import { ref, set, get, update, remove, child } from "firebase/database";

export default function Offers() {
  const dbref = ref(database);
  const [name, Setname] = useState();
  const [about, Setabout] = useState();
  const [followerCount, SetfollowerCount] = useState();
  const [renderArray, setrenderArray] = useState([0]);
  const [communityLists, setcommunityLists] = useState([]);
  const [nameArray, SetnameArray] = useState([]);
  useEffect(() => {
    console.log(localStorage.getItem("UserMail"));
    get(
      child(dbref, "Users/" + localStorage.getItem("UserMail") + "/Offers")
    ).then((snapshot) => {
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
      <Header />
      <div className="BottomMain">
        <NavMenu />
        <div className="ContentArea">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "90%",
              backgroundColor: "#e5e1e9",
              padding: "1%",
            }}
          >
            <h2>My Offers</h2>
          </div>
          {communityLists.map((value, index) => {
            return (
              <Offer
                offerName={value.offerName}
                companyName={value.companyName}
                salary={value.salary}
                location={value.location}
                id={value.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
