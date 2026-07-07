import {
    auth,
    onAuthStateChanged,
    signOut
} from "./firebase.js";

const userArea = document.getElementById("userArea");

onAuthStateChanged(auth, (user) => {

    if (user) {

        const name = user.displayName || user.email;
        const photo = user.photoURL || "images/LOGO.jpeg";

        userArea.innerHTML = `
            <div class="user-profile">

                <img src="${photo}" class="profile-pic" alt="Profile">

                <span class="user-name">${name}</span>

                <button id="logoutBtn">Logout</button>

            </div>
        `;

        document.getElementById("logoutBtn").onclick = async () => {
            await signOut(auth);
            location.reload();
        };

    } else {

        userArea.innerHTML = `
            <a href="pages/login.html" class="btn">Sign In</a>
        `;

    }

});
