import { auth, db } from "../firebase.js";

import {
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import {
    doc,
    getDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

onAuthStateChanged(auth, async (user) => {

    if (!user) {

        location.href = "login.html";
        return;

    }

    document.getElementById("photo").src =
        user.photoURL || "../images/LOGO.jpeg";

    document.getElementById("name").innerHTML =
        user.displayName || "ATR Student";

    document.getElementById("email").innerHTML =
        user.email;

    const snap = await getDoc(doc(db, "users", user.uid));

    if (snap.exists()) {

        const data = snap.data();

        document.getElementById("plan").innerHTML =
            data.premium
                ? "👑 Premium Member"
                : "🆓 Free Member";

    }

});

document.getElementById("logoutBtn").onclick = async () => {

    await signOut(auth);

    location.href = "login.html";

};