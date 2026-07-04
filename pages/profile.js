import { auth, db } from "../firebase.js";

import {
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import {
    doc,
    getDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const premiumStatus = document.getElementById("premiumStatus");
const logoutBtn = document.getElementById("logoutBtn");

onAuthStateChanged(auth, async (user) => {

    if (!user) {

        window.location.href = "login.html";
        return;

    }

    try {

        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {

            const data = userSnap.data();

            userName.textContent = "👋 Welcome, " + data.name;
            userEmail.textContent = "📧 " + data.email;

            premiumStatus.textContent =
                data.premium ? "👑 Premium Member" : "Free Account";

        } else {

            userName.textContent = "User not found";

        }

    } catch (error) {

        console.error(error);

    }

});

logoutBtn.addEventListener("click", async () => {

    await signOut(auth);

    window.location.href = "login.html";

});
