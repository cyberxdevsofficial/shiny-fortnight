import { auth, db } from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const avatar = document.getElementById("avatar");

auth.onAuthStateChanged(user => {
  if (!user) location.href = "index.html";

  avatar.src = user.photoURL || "https://via.placeholder.com/40";

  loadProjects(user.uid);
});

window.goProfile = () => {
  location.href = "profile.html";
};

async function loadProjects(uid) {
  const snap = await getDocs(collection(db, "projects"));
  let html = "";

  snap.forEach(doc => {
    const p = doc.data();
    if (p.uid === uid) {
      html += `
      <div class="card">
        <h3>${p.name}</h3>
        <p>${p.subdomain}</p>
        <a href="${p.repo}" target="_blank">GitHub Repo</a>
      </div>`;
    }
  });

  document.getElementById("projects").innerHTML = html;
}
