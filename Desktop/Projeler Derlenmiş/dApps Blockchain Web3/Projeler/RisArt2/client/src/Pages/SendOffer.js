import Header from "../Components/Header";
import { Outlet, Link } from "react-router-dom";
import NavMenu from "../Components/NavMenu";
import "../Styles/Create.css";
import { useEffect } from "react";
import { useState } from "react";
import { storage } from "../Functions/FirebaseConfig";
import { ref, uploadBytes } from "firebase/storage";
import { sendOffer } from "../Functions/DBfunctionsj";

export default function Create() {
  const [ımageUpload, setımageUpload] = useState(null);
  useEffect(() => {
    console.log(localStorage.getItem("LookingForeignProfile"));
  }, []);

  const offersend = () => {
    const id = String(parseInt(Math.random() * 1000000));
    const companyName = String(document.getElementById("CompanyName").value);
    const offerName = String(document.getElementById("OfferName").value);
    const location = String(document.getElementById("Location").value);
    const salary = String(document.getElementById("Salary").value);
    console.log(companyName, offerName, location, salary);

    if (
      companyName.length > 0 &&
      companyName.length <= 15 &&
      offerName.length > 0 &&
      offerName.length <= 15 &&
      location.length > 0 &&
      location.length <= 15 &&
      salary.length > 0 &&
      salary.length <= 15
    ) {
      console.log("test");
      if (ımageUpload == null) return alert("You have select a company logo.");
      const ımageRef = ref(storage, "Offers/" + id);
      uploadBytes(ımageRef, ımageUpload).then(() => {
        console.log("Done");
        sendOffer(
          id,
          companyName,
          offerName,
          location,
          salary,
          localStorage.getItem("LookingForeignProfile")
        );
      });
    } else {
      alert("You have to fill all blanks");
    }
  };

  return (
    <div className="MainField">
      <Header />
      <div className="BottomMain">
        <NavMenu />
        <div className="ContentArea">
          <div className="CreateArea">
            <h2>*Company Logo</h2>
            <label for="avatar">Choose a profile picture:</label>

            <input
              type="file"
              onChange={(event) => {
                setımageUpload(event.target.files[0]);
              }}
            ></input>
            <h2>*Company Name</h2>
            <input id="CompanyName" placeholder="Type your company name..." />
            <h2>*Offer Title</h2>
            <input id="OfferName" placeholder="Type job offer title..." />
            <h2>*Company Location</h2>
            <input id="Location" placeholder="Type your company location..." />
            <h2>*Salary</h2>
            <input id="Salary" placeholder="Type job salary..." />
            <div className="ButtonDivPostCreate">
              <button onClick={offersend} className="HeaderButton">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
