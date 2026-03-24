import { auth, googleProvider, githubProvider } from "./firebase.js";
import { signInWithPopup } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

window.googleLogin = () => {
  signInWithPopup(auth, googleProvider)
    .then(() => location.href = "dashboard.html")
    .catch(err => alert(err.message));
};

window.githubLogin = () => {
  signInWithPopup(auth, githubProvider)
    .then(() => location.href = "dashboard.html")
    .catch(err => alert(err.message));
};
