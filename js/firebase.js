import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCVumXqnV4AFzP9uk275v9-7yrMlt4kGe4",
  authDomain: "anugahostingzz.firebaseapp.com",
  projectId: "anugahostingzz",
  storageBucket: "anugahostingzz.firebasestorage.app",
  messagingSenderId: "182948977720",
  appId: "1:182948977720:web:044de7bcbd76645b5c1acd"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();
