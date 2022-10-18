import { signUp } from "../Functions/DBfunctionsj";
import { signIn } from "../Functions/FirebaseConfig";
import { storage } from "../Functions/FirebaseConfig";
import { ref, uploadBytes } from "firebase/storage";
import { uploadPost } from "../Functions/DBfunctionsj";
import ProfilePhoto from "../Images/ProfilePhoto.jpg";

export default function LoginSign() {
  const SignUp = () => {
    const ımageUpload = ProfilePhoto;
    const name = document.getElementById("UserName").value;
    const email = document.getElementById("Email").value;
    const password = document.getElementById("Password").value;
    console.log("değerler", name, email, password);
    signUp(name, email, password)
      .then(async () => {
        console.log("Done");
        const ımageRef = ref(storage, "ProfilePhotos/" + email);
        await uploadBytes(ımageRef, ProfilePhoto).then(() => {
          console.log("pp done");
        });
        localStorage.setItem("Logged", "true");
        localStorage.setItem("UserMail", email);
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
        alert(e);
      });
  };

  const SignIn = () => {
    console.log("sign ın");
    const name = document.getElementById("UserName").value;
    const email = document.getElementById("Email").value;
    const password = document.getElementById("Password").value;
    signIn(email + "@gmail.com", password)
      .then(() => {
        console.log("Done");

        localStorage.setItem("Logged", "true");
        localStorage.setItem("UserMail", email);
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="LoginSignUp">
      <h2>Username</h2>
      <input placeholder="Type a post a name..." id="UserName" />
      <h2>Email(type without "@gmail.com")</h2>
      <input id="Email" placeholder="Type a post description..." />
      <h2>Password</h2>
      <input id="Password" placeholder="Post Tags..." />
      <div className="ButtonDivPostCreate">
        <button className="HeaderButton" onClick={SignIn}>
          Login
        </button>
        <button
          style={{ marginLeft: "1%" }}
          className="HeaderButton"
          onClick={SignUp}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
