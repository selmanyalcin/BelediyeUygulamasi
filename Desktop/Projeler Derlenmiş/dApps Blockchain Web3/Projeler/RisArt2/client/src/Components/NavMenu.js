import { Outlet, Link } from "react-router-dom";

export default function NavMenu() {
  const connectWallet = async () => {
    console.log("Cüzdan");
    const accounts = await window.ethereum
      .request({ method: "eth_requestAccounts" })
      .catch((err) => {
        console.log(err);
      });
    console.log(accounts);
  };

  return (
    <div className="NavMenuMain">
      <Link className="NavMenuLink" to="/">
        <div className="NavMenuNav">
          <i style={{ color: "gray" }} class="fa-solid fa-house fa-xl"></i>
          <h3>Home</h3>
        </div>
      </Link>
      <Link className="NavMenuLink" to="/Communities">
        <div className="NavMenuNav">
          <i style={{ color: "gray" }} class="fa-solid fa-user-group fa-xl"></i>
          <h3>Communities</h3>
        </div>
      </Link>
      <Link className="NavMenuLink" to="/Profile">
        <div className="NavMenuNav">
          <i style={{ color: "gray" }} class="fa-regular fa-user fa-xl"></i>
          <h3>Profile</h3>
        </div>
      </Link>
      <Link className="NavMenuLink" to="/Offers">
        <div className="NavMenuNav">
          <i style={{ color: "gray" }} class="fa-solid fa-briefcase fa-xl"></i>
          <h3>Offers</h3>
        </div>
      </Link>
      <Link className="NavMenuLink" to="/Jobs">
        <div className="NavMenuNav">
          <i style={{ color: "gray" }} class="fa-solid fa-computer fa-xl"></i>
          <h3>Job</h3>
        </div>
      </Link>

      <div className="NavMenuLink">
        <button className="NavMenuButton" onClick={connectWallet}>
          Connect Wallet
        </button>
      </div>
      <div></div>
    </div>
  );
}
