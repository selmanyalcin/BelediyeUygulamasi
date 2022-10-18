import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ref, getBytes, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../Functions/FirebaseConfig";
import ProfilePhoto from "../Images/ProfilePhoto.jpg";

export default function Offer(props) {
  const [ımageLink, setımageLink] = useState(ProfilePhoto);

  useEffect(() => {
    console.log(props.name);
    const ImageRef = ref(storage, "Offers/" + props.id);

    getDownloadURL(ImageRef).then((response) => {
      console.log(response);
      setımageLink(response);
    });
  }, []);

  return (
    <div className="OfferMain">
      <div className="CompanyPP">
        <img className="HeaderPP" src={ımageLink} />
      </div>
      <div className="OfferDetails">
        <div className="NameSectionOffer">
          <h4>{props.offerName}</h4>
          <p>{props.companyName}</p>
          <p>
            {props.location},{props.salary}$
          </p>
        </div>
        <div className="ApplyButton">
          <button className="HeaderButton">Apply</button>
        </div>
      </div>
    </div>
  );
}
