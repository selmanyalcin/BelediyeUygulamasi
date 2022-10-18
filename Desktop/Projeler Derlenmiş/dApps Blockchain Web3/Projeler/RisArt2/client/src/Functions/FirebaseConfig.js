import { initializeApp } from "firebase/app";
import "firebase/firestore";
import { firebase } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateCurrentUser,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Database, getDatabase } from "firebase/database";
import { ref, set, get, update, remove, child } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAp_Ck8bIkmWyi2TLPQRKeEALZh9L21pts",
  authDomain: "risartdemo-f8400.firebaseapp.com",
  projectId: "risartdemo-f8400",
  storageBucket: "risartdemo-f8400.appspot.com",
  messagingSenderId: "52039933854",
  appId: "1:52039933854:web:63ab27a815b39afe7b808f",
  measurementId: "G-LDWS1SVH2N",
};

export const app = initializeApp(firebaseConfig);
const firestore = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const database = getDatabase(app);
export const storage = getStorage(app);

export const signIn = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
};

export const logOut = async () => {
  await auth
    .signOut()
    .then(() => {
      console.log("Done");
    })
    .catch((e) => {
      alert(e);
    });
};
