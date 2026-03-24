import { auth, db } from "./firebase.js";
import { addDoc, collection } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

window.deploy = async () => {
  const name = document.getElementById("projectName").value.trim();
  const repo = document.getElementById("repoLink").value.trim();

  if (!name || !repo) {
    alert("Fill all fields");
    return;
  }

  const subdomain = name.toLowerCase().replace(/\s+/g, "-") + ".anugahostingz.wildheavenbeach.xyz";

  await addDoc(collection(db, "projects"), {
    uid: auth.currentUser.uid,
    name,
    repo,
    subdomain,
    created: new Date()
  });

  alert("🚀 Deployed: " + subdomain);
  location.href = "dashboard.html";
};
