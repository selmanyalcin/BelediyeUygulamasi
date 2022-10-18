import { initializeApp } from "firebase/app";

import "../Styles/Components.css";
import { ref, getBytes, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "../Functions/FirebaseConfig";

const firebaseConfig = {
  apiKey: "AIzaSyAp_Ck8bIkmWyi2TLPQRKeEALZh9L21pts",
  authDomain: "risartdemo-f8400.firebaseapp.com",
  projectId: "risartdemo-f8400",
  storageBucket: "risartdemo-f8400.appspot.com",
  messagingSenderId: "52039933854",
  appId: "1:52039933854:web:63ab27a815b39afe7b808f",
  measurementId: "G-LDWS1SVH2N",
};

export const getprofilePhoto = () => {
  const UserMail = localStorage.getItem("UserMail");

  const ImageRef = ref(storage, "ProfilePhotos/" + UserMail);
  getDownloadURL(ImageRef).then((response) => {
    localStorage.setItem("ProfilePhotoLink", response);
  });
};
