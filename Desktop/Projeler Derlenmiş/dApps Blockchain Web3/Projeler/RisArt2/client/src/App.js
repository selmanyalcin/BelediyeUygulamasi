import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Main";
import Profile from "./Pages/Profile";
import PostPage from "./Pages/PostPage";
import Create from "./Pages/Create";
import Communities from "./Pages/Communities";
import CommunityPage from "./Pages/CommunityPage";
import Offers from "./Pages/Offers";
import Job from "./Pages/Job";
import JobOffers from "./Pages/JobOffers";
import CreateOffer from "./Pages/CreateOffer";
import ForeignProfile from "./Pages/ForeignProfile";
import CreateCommunity from "./Pages/CreateCommunity";
import ProfileAbout from "./Pages/ProfileAbout";
import SubscriptionProfile from "./Pages/SubscriptionProfile";
import ProfileCommunities from "./Pages/ProfileCommunities";
import ForeignProfileAbout from "./Pages/ForeignProfileAbout";
import ForeignProfileSubscription from "./Pages/ForeignProfileSubscription";
import ForeignCommunities from "./Pages/ForeignProfileCommunities";
import EditProfile from "./Pages/EditProfile";
import SendOffer from "./Pages/SendOffer";
import Marvel from "./Pages/Verified Community Pages/Marvel";
import MorganFreeman from "./Pages/Verified Community Pages/MorganFreeman";
import Fenerbahçe from "./Pages/Verified Community Pages/Fenerbahçe";
import Orkunİsitmak from "./Pages/Verified Community Pages/Orkunİsitmak";
import MarvelSubscription from "./Pages/Verified Community Pages/MarvelSubs";
import MorganFreemanSubscription from "./Pages/Verified Community Pages/MorganFreemanSubs";
import FenerbahçeSubscription from "./Pages/Verified Community Pages/FenerbahçeSubs";
import OrkunSubs from "./Pages/Verified Community Pages/OrkunSubs";
import CreatePremiumWorks from "./Pages/CreatePremiumWork";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="PostPage" element={<PostPage />} />
        <Route path="CreatePage" element={<Create />} />
        <Route path="Communities" element={<Communities />} />
        <Route path="CommunityPage" element={<CommunityPage />} />
        <Route path="Offers" element={<Offers />} />
        <Route path="Jobs" element={<Job />} />
        <Route path="JobOffers" element={<JobOffers />} />
        <Route path="CreateOffer" element={<CreateOffer />} />
        <Route path="ForeignProfile" element={<ForeignProfile />} />
        <Route path="CreateCommunity" element={<CreateCommunity />} />
        <Route path="ProfileAbout" element={<ProfileAbout />} />
        <Route path="SubscriptionProfile" element={<SubscriptionProfile />} />
        <Route path="ProfileCommunities" element={<ProfileCommunities />} />
        <Route path="ForeignProfileAbout" element={<ForeignProfileAbout />} />
        <Route
          path="ForeignProfileSubs"
          element={<ForeignProfileSubscription />}
        />
        <Route path="ForeignCommunities" element={<ForeignCommunities />} />
        <Route path="EditProfile" element={<EditProfile />} />
        <Route path="SendOffer" element={<SendOffer />} />
        <Route path="Marvel" element={<Marvel />} />
        <Route path="MorganFreeman" element={<MorganFreeman />} />
        <Route path="Fenerbahce" element={<Fenerbahçe />} />
        <Route path="Orkun" element={<Orkunİsitmak />} />
        <Route path="MarvelSubs" element={<MarvelSubscription />} />
        <Route
          path="MorganFreemanSubs"
          element={<MorganFreemanSubscription />}
        />
        <Route path="FenerbahçeSubs" element={<FenerbahçeSubscription />} />
        <Route path="OrkunSubs" element={<OrkunSubs />} />
        <Route path="CreatePremiumWorks" element={<CreatePremiumWorks />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
