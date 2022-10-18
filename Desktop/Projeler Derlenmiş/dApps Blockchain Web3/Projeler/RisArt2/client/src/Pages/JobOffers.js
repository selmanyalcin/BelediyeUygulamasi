import NavMenu from "../Components/NavMenu";
import Header from "../Components/Header";
import Offer from "../Components/Offer";
import { Outlet, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { database } from "../Functions/FirebaseConfig";
import { ref, set, get, update, remove, child } from "firebase/database";
const dbref = ref(database);

export default function JobOffers() {
  const [renderArray, setrenderArray] = useState([0]);
  const [communityLists, setcommunityLists] = useState([]);
  const [nameArray, SetnameArray] = useState([]);

  useEffect(() => {
    get(child(dbref, "Offers/")).then((snapshot) => {
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
          <div className="TopBarJobs">
            <div>
              <h2>Job Offers</h2>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Link to="/Jobs">
                <button className="HeaderButton">Job Cats.</button>
              </Link>
              <Link to="/CreateOffer">
                <button
                  style={{ marginLeft: "10px", marginRight: "5px" }}
                  className="HeaderButton"
                >
                  Create Offer
                </button>
              </Link>
            </div>
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
